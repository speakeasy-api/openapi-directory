import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Email history retrieval successful
 */
export declare class CertificateEmailHistory extends SpeakeasyBase {
    /**
     * Shopper Id requested certificate
     */
    accountId: number;
    /**
     * Email message
     */
    body: string;
    /**
     * Date email sent
     */
    dateEntered: string;
    /**
     * Email from address
     */
    fromType: string;
    /**
     * Email Id
     */
    id: number;
    /**
     * Email address email was sent
     */
    recipients: string;
    /**
     * Email subject
     */
    subject: string;
    /**
     * Email template type name
     */
    templateType: string;
}
