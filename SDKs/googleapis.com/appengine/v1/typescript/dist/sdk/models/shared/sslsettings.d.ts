import { SpeakeasyBase } from "../../../internal/utils";
/**
 * SSL management type for this domain. If AUTOMATIC, a managed certificate is automatically provisioned. If MANUAL, certificate_id must be manually specified in order to configure SSL for this domain.
 */
export declare enum SslSettingsSslManagementTypeEnum {
    SslManagementTypeUnspecified = "SSL_MANAGEMENT_TYPE_UNSPECIFIED",
    Automatic = "AUTOMATIC",
    Manual = "MANUAL"
}
/**
 * SSL configuration for a DomainMapping resource.
 */
export declare class SslSettings extends SpeakeasyBase {
    /**
     * ID of the AuthorizedCertificate resource configuring SSL for the application. Clearing this field will remove SSL support.By default, a managed certificate is automatically created for every domain mapping. To omit SSL support or to configure SSL manually, specify SslManagementType.MANUAL on a CREATE or UPDATE request. You must be authorized to administer the AuthorizedCertificate resource to manually map it to a DomainMapping resource. Example: 12345.
     */
    certificateId?: string;
    /**
     * ID of the managed AuthorizedCertificate resource currently being provisioned, if applicable. Until the new managed certificate has been successfully provisioned, the previous SSL state will be preserved. Once the provisioning process completes, the certificate_id field will reflect the new managed certificate and this field will be left empty. To remove SSL support while there is still a pending managed certificate, clear the certificate_id field with an UpdateDomainMappingRequest.@OutputOnly
     */
    pendingManagedCertificateId?: string;
    /**
     * SSL management type for this domain. If AUTOMATIC, a managed certificate is automatically provisioned. If MANUAL, certificate_id must be manually specified in order to configure SSL for this domain.
     */
    sslManagementType?: SslSettingsSslManagementTypeEnum;
}
