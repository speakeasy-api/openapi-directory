import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Whether to include or exclude the enums matching the regex.
 */
export declare enum EnterpriseCrmEventbusStatsDimensionsEnumFilterTypeEnum {
    DefaultInclusive = "DEFAULT_INCLUSIVE",
    Exclusive = "EXCLUSIVE"
}
export declare enum EnterpriseCrmEventbusStatsDimensionsRetryAttemptEnum {
    Unspecified = "UNSPECIFIED",
    Final = "FINAL",
    Retryable = "RETRYABLE",
    Canceled = "CANCELED"
}
export declare class EnterpriseCrmEventbusStatsDimensions extends SpeakeasyBase {
    clientId?: string;
    /**
     * Whether to include or exclude the enums matching the regex.
     */
    enumFilterType?: EnterpriseCrmEventbusStatsDimensionsEnumFilterTypeEnum;
    errorEnumString?: string;
    retryAttempt?: EnterpriseCrmEventbusStatsDimensionsRetryAttemptEnum;
    taskName?: string;
    taskNumber?: string;
    /**
     * Stats have been or will be aggregated on set fields for any semantically-meaningful combination.
     */
    triggerId?: string;
    warningEnumString?: string;
    workflowId?: string;
    workflowName?: string;
}
