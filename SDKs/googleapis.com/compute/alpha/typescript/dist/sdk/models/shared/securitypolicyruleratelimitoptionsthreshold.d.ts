import { SpeakeasyBase } from "../../../internal/utils";
export declare class SecurityPolicyRuleRateLimitOptionsThreshold extends SpeakeasyBase {
    /**
     * Number of HTTP(S) requests for calculating the threshold.
     */
    count?: number;
    /**
     * Interval over which the threshold is computed.
     */
    intervalSec?: number;
}
