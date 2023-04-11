import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of mailer
 */
export declare enum MailerMailjetExporterConfigTypeEnum {
    Mailjet = "mailjet"
}
/**
 * Data Exporter config
 */
export declare class MailerMailjetExporterConfig extends SpeakeasyBase {
    /**
     * Mailjet private apiKey
     */
    apiKeyPrivate?: string;
    /**
     * Mailjet public apiKey
     */
    apiKeyPublic?: string;
    /**
     * Email adresses of recipents
     */
    to?: string[];
    /**
     * Type of mailer
     */
    type: MailerMailjetExporterConfigTypeEnum;
}
