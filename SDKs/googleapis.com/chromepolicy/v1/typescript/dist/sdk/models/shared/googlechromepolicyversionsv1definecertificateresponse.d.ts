import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromePolicyVersionsV1NetworkSetting } from "./googlechromepolicyversionsv1networksetting";
/**
 * Response object for creating a certificate.
 */
export declare class GoogleChromePolicyVersionsV1DefineCertificateResponse extends SpeakeasyBase {
    /**
     * The guid of the certificate created by the action.
     */
    networkId?: string;
    /**
     * the affiliated settings of the certificate (NOT IMPLEMENTED)
     */
    settings?: GoogleChromePolicyVersionsV1NetworkSetting[];
    /**
     * the resource at which the certificate is defined.
     */
    targetResource?: string;
}
