import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request object for removing a certificate.
 */
export declare class GoogleChromePolicyVersionsV1RemoveCertificateRequest extends SpeakeasyBase {
    /**
     * Required. The GUID of the certificate to remove.
     */
    networkId?: string;
    /**
     * Required. The target resource on which this certificate will be removed. The following resources are supported: * Organizational Unit ("orgunits/{orgunit_id}")
     */
    targetResource?: string;
}
