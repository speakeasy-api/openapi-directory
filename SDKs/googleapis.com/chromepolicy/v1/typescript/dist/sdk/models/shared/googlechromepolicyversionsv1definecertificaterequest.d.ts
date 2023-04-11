import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromePolicyVersionsV1NetworkSetting } from "./googlechromepolicyversionsv1networksetting";
/**
 * Request object for creating a certificate.
 */
export declare class GoogleChromePolicyVersionsV1DefineCertificateRequest extends SpeakeasyBase {
    /**
     * Optional. The optional name of the certificate. If not specified, the certificate issuer will be used as the name.
     */
    ceritificateName?: string;
    /**
     * Required. The raw contents of the .PEM, .CRT, or .CER file.
     */
    certificate?: string;
    /**
     * Optional. Certificate settings within the chrome.networks.certificates namespace.
     */
    settings?: GoogleChromePolicyVersionsV1NetworkSetting[];
    /**
     * Required. The target resource on which this certificate is applied. The following resources are supported: * Organizational Unit ("orgunits/{orgunit_id}")
     */
    targetResource?: string;
}
