import { SpeakeasyBase } from "../../../internal/utils";
/**
 * SSL configuration for a DomainMapping resource.
 */
export declare class SslSettings extends SpeakeasyBase {
    /**
     * ID of the AuthorizedCertificate resource configuring SSL for the application. Clearing this field will remove SSL support.By default, a managed certificate is automatically created for every domain mapping. To omit SSL support or to configure SSL manually, specify no_managed_certificate on a CREATE or UPDATE request. You must be authorized to administer the AuthorizedCertificate resource to manually map it to a DomainMapping resource. Example: 12345.
     */
    certificateId?: string;
    /**
     * Whether the mapped certificate is an App Engine managed certificate. Managed certificates are created by default with a domain mapping. To opt out, specify no_managed_certificate on a CREATE or UPDATE request.@OutputOnly
     */
    isManagedCertificate?: boolean;
}
