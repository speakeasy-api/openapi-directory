import { SpeakeasyBase } from "../../../internal/utils";
export declare enum EnterpriseCrmLoggingGwsFieldLimitsLogActionEnum {
    LogActionUnspecified = "LOG_ACTION_UNSPECIFIED",
    DontLog = "DONT_LOG",
    Log = "LOG"
}
export declare enum EnterpriseCrmLoggingGwsFieldLimitsLogTypeEnum {
    LogTypeUnspecified = "LOG_TYPE_UNSPECIFIED",
    Gws = "GWS",
    Gts = "GTS",
    All = "ALL"
}
export declare enum EnterpriseCrmLoggingGwsFieldLimitsShortenerTypeEnum {
    ShortenerTypeUnspecified = "SHORTENER_TYPE_UNSPECIFIED",
    Shorten = "SHORTEN",
    Hash = "HASH",
    ShortenWithHash = "SHORTEN_WITH_HASH",
    ShortenEmail = "SHORTEN_EMAIL",
    ShortenEmailWithHash = "SHORTEN_EMAIL_WITH_HASH",
    ShortenDomain = "SHORTEN_DOMAIN"
}
/**
 * Describes string and array limits when writing to logs. When a limit is exceeded the *shortener_type* describes how to shorten the field. next_id: 6
 */
export declare class EnterpriseCrmLoggingGwsFieldLimits extends SpeakeasyBase {
    logAction?: EnterpriseCrmLoggingGwsFieldLimitsLogActionEnum;
    /**
     * To which type(s) of logs the limits apply.
     */
    logType?: EnterpriseCrmLoggingGwsFieldLimitsLogTypeEnum[];
    /**
     * maximum array size. If the array exceds this size, the field (list) is truncated.
     */
    maxArraySize?: number;
    /**
     * maximum string length. If the field exceeds this amount the field is shortened.
     */
    maxStringLength?: number;
    shortenerType?: EnterpriseCrmLoggingGwsFieldLimitsShortenerTypeEnum;
}
