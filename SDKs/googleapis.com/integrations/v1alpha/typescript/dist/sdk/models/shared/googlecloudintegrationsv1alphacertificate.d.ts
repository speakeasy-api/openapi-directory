import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaClientCertificate } from "./googlecloudintegrationsv1alphaclientcertificate";
/**
 * Status of the certificate
 */
export declare enum GoogleCloudIntegrationsV1alphaCertificateCertificateStatusEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Expired = "EXPIRED"
}
/**
 * The certificate definition
 */
export declare class GoogleCloudIntegrationsV1alphaCertificate extends SpeakeasyBase {
    /**
     * Status of the certificate
     */
    certificateStatus?: GoogleCloudIntegrationsV1alphaCertificateCertificateStatusEnum;
    /**
     * Immutable. Credential id that will be used to register with trawler INTERNAL_ONLY
     */
    credentialId?: string;
    /**
     * Description of the certificate
     */
    description?: string;
    /**
     * Name of the certificate
     */
    displayName?: string;
    /**
     * Output only. Auto generated primary key
     */
    name?: string;
    /**
     * Contains client certificate information
     */
    rawCertificate?: GoogleCloudIntegrationsV1alphaClientCertificate;
    /**
     * Immutable. Requestor ID to be used to register certificate with trawler
     */
    requestorId?: string;
    /**
     * Output only. The timestamp after which certificate will expire
     */
    validEndTime?: string;
    /**
     * Output only. The timestamp after which certificate will be valid
     */
    validStartTime?: string;
}
/**
 * The certificate definition
 */
export declare class GoogleCloudIntegrationsV1alphaCertificateInput extends SpeakeasyBase {
    /**
     * Status of the certificate
     */
    certificateStatus?: GoogleCloudIntegrationsV1alphaCertificateCertificateStatusEnum;
    /**
     * Immutable. Credential id that will be used to register with trawler INTERNAL_ONLY
     */
    credentialId?: string;
    /**
     * Description of the certificate
     */
    description?: string;
    /**
     * Name of the certificate
     */
    displayName?: string;
    /**
     * Contains client certificate information
     */
    rawCertificate?: GoogleCloudIntegrationsV1alphaClientCertificate;
    /**
     * Immutable. Requestor ID to be used to register certificate with trawler
     */
    requestorId?: string;
}
