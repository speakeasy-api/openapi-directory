import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The resource quota tokens remaining for the property after the request is completed.
 */
export declare class ResourceQuotasRemaining extends SpeakeasyBase {
    /**
     * Daily resource quota remaining remaining.
     */
    dailyQuotaTokensRemaining?: number;
    /**
     * Hourly resource quota tokens remaining.
     */
    hourlyQuotaTokensRemaining?: number;
}
