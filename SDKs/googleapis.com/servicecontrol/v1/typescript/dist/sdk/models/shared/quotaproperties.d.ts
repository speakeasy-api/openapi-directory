import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Quota mode for this operation.
 */
export declare enum QuotaPropertiesQuotaModeEnum {
    Acquire = "ACQUIRE",
    AcquireBestEffort = "ACQUIRE_BEST_EFFORT",
    Check = "CHECK"
}
/**
 * Represents the properties needed for quota operations.
 */
export declare class QuotaProperties extends SpeakeasyBase {
    /**
     * Quota mode for this operation.
     */
    quotaMode?: QuotaPropertiesQuotaModeEnum;
}
