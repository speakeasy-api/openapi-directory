import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specify the desired filtering of logs on this NAT. If unspecified, logs are exported for all connections handled by this NAT. This option can take one of the following values: - ERRORS_ONLY: Export logs only for connection failures. - TRANSLATIONS_ONLY: Export logs only for successful connections. - ALL: Export logs for all connections, successful and unsuccessful.
 */
export declare enum RouterNatLogConfigFilterEnum {
    All = "ALL",
    ErrorsOnly = "ERRORS_ONLY",
    TranslationsOnly = "TRANSLATIONS_ONLY"
}
/**
 * Configuration of logging on a NAT.
 */
export declare class RouterNatLogConfig extends SpeakeasyBase {
    /**
     * Indicates whether or not to export logs. This is false by default.
     */
    enable?: boolean;
    /**
     * Specify the desired filtering of logs on this NAT. If unspecified, logs are exported for all connections handled by this NAT. This option can take one of the following values: - ERRORS_ONLY: Export logs only for connection failures. - TRANSLATIONS_ONLY: Export logs only for successful connections. - ALL: Export logs for all connections, successful and unsuccessful.
     */
    filter?: RouterNatLogConfigFilterEnum;
}
