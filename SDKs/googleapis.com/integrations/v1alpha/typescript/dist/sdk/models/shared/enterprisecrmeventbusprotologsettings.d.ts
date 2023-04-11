import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmLoggingGwsFieldLimits } from "./enterprisecrmlogginggwsfieldlimits";
import { EnterpriseCrmLoggingGwsSanitizeOptions } from "./enterprisecrmlogginggwssanitizeoptions";
export declare enum EnterpriseCrmEventbusProtoLogSettingsSeedPeriodEnum {
    SeedPeriodUnspecified = "SEED_PERIOD_UNSPECIFIED",
    Day = "DAY",
    Week = "WEEK",
    Month = "MONTH"
}
export declare enum EnterpriseCrmEventbusProtoLogSettingsSeedScopeEnum {
    SeedScopeUnspecified = "SEED_SCOPE_UNSPECIFIED",
    EventName = "EVENT_NAME",
    TimePeriod = "TIME_PERIOD",
    ParamName = "PARAM_NAME"
}
/**
 * The LogSettings define the logging attributes for an event property. These attributes are used to map the property to the parameter in the log proto. Also used to define scrubbing/truncation behavior and PII information.
 */
export declare class EnterpriseCrmEventbusProtoLogSettings extends SpeakeasyBase {
    /**
     * The name of corresponding logging field of the event property. If omitted, assumes the same name as the event property key.
     */
    logFieldName?: string;
    /**
     * Identifies whether a field contains, or may contain, PII or sensitive data, and how to sanitize the field if it does. If a field's privacy type cannot be determined then it is sanitized (e.g., scrubbed). The specific sanitizer implementation is determined by run-time configuration and environment options (e.g., prod vs. qa). next_id: 5
     */
    sanitizeOptions?: EnterpriseCrmLoggingGwsSanitizeOptions;
    seedPeriod?: EnterpriseCrmEventbusProtoLogSettingsSeedPeriodEnum;
    seedScope?: EnterpriseCrmEventbusProtoLogSettingsSeedScopeEnum;
    /**
     * Describes string and array limits when writing to logs. When a limit is exceeded the *shortener_type* describes how to shorten the field. next_id: 6
     */
    shorteningLimits?: EnterpriseCrmLoggingGwsFieldLimits;
}
