import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of mailer
 */
export declare enum MailerConsoleExporterConfigTypeEnum {
    Generic = "generic"
}
/**
 * Data Exporter config
 */
export declare class MailerConsoleExporterConfig extends SpeakeasyBase {
    /**
     * Type of mailer
     */
    type?: MailerConsoleExporterConfigTypeEnum;
}
