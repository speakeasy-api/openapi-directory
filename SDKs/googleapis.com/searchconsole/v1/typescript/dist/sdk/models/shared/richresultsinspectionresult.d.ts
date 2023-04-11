import { SpeakeasyBase } from "../../../internal/utils";
import { DetectedItems } from "./detecteditems";
/**
 * High-level rich results inspection result for this URL.
 */
export declare enum RichResultsInspectionResultVerdictEnum {
    VerdictUnspecified = "VERDICT_UNSPECIFIED",
    Pass = "PASS",
    Partial = "PARTIAL",
    Fail = "FAIL",
    Neutral = "NEUTRAL"
}
/**
 * Rich-Results inspection result, including any rich results found at this URL.
 */
export declare class RichResultsInspectionResult extends SpeakeasyBase {
    /**
     * A list of zero or more rich results detected on this page. Rich results that cannot even be parsed due to syntactic issues will not be listed here.
     */
    detectedItems?: DetectedItems[];
    /**
     * High-level rich results inspection result for this URL.
     */
    verdict?: RichResultsInspectionResultVerdictEnum;
}
