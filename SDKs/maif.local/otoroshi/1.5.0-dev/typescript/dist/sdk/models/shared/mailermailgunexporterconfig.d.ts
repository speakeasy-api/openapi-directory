import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of mailer
 */
export declare enum MailerMailgunExporterConfigTypeEnum {
    Mailgun = "mailgun"
}
/**
 * Data Exporter config
 */
export declare class MailerMailgunExporterConfig extends SpeakeasyBase {
    /**
     * Mailgun apiKey
     */
    apiKey?: string;
    /**
     * Mailgun domain
     */
    domain?: string;
    /**
     * Whether the mailgun server is european
     */
    eu?: boolean;
    /**
     * Email adresses of recipents
     */
    to?: string[];
    /**
     * Type of mailer
     */
    type: MailerMailgunExporterConfigTypeEnum;
}
