import { SpeakeasyBase } from "../../../internal/utils";
import { MobileUsabilityIssue } from "./mobileusabilityissue";
/**
 * High-level mobile-usability inspection result for this URL.
 */
export declare enum MobileUsabilityInspectionResultVerdictEnum {
    VerdictUnspecified = "VERDICT_UNSPECIFIED",
    Pass = "PASS",
    Partial = "PARTIAL",
    Fail = "FAIL",
    Neutral = "NEUTRAL"
}
/**
 * Mobile-usability inspection results.
 */
export declare class MobileUsabilityInspectionResult extends SpeakeasyBase {
    /**
     * A list of zero or more mobile-usability issues detected for this URL.
     */
    issues?: MobileUsabilityIssue[];
    /**
     * High-level mobile-usability inspection result for this URL.
     */
    verdict?: MobileUsabilityInspectionResultVerdictEnum;
}
