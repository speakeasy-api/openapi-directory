import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of mailer
 */
export declare enum MailerSendgridExporterConfigTypeEnum {
    Sendgrid = "sendgrid"
}
/**
 * Data Exporter config
 */
export declare class MailerSendgridExporterConfig extends SpeakeasyBase {
    /**
     * Sendgrid apiKey
     */
    apiKeyPublic?: string;
    /**
     * Email adresses of recipents
     */
    to?: string[];
    /**
     * Type of mailer
     */
    type: MailerSendgridExporterConfigTypeEnum;
}
