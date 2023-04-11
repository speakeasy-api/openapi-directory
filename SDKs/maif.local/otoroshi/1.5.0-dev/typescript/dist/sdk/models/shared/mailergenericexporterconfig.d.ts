import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of mailer
 */
export declare enum MailerGenericExporterConfigTypeEnum {
    Generic = "generic"
}
/**
 * Data Exporter config
 */
export declare class MailerGenericExporterConfig extends SpeakeasyBase {
    /**
     * Optional headers
     */
    headers?: Record<string, string>;
    /**
     * Email adresses of recipents
     */
    to?: string[];
    /**
     * Type of mailer
     */
    type: MailerGenericExporterConfigTypeEnum;
    /**
     * Url of mailer
     */
    url?: string;
}
