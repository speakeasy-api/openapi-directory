import { SpeakeasyBase } from "../../../internal/utils";
import { FailureDetail } from "./failuredetail";
import { InconclusiveDetail } from "./inconclusivedetail";
import { SkippedDetail } from "./skippeddetail";
import { SuccessDetail } from "./successdetail";
/**
 * The simplest way to interpret a result. Required
 */
export declare enum OutcomeSummaryEnum {
    Unset = "unset",
    Success = "success",
    Failure = "failure",
    Inconclusive = "inconclusive",
    Skipped = "skipped",
    Flaky = "flaky"
}
/**
 * Interprets a result so that humans and machines can act on it.
 */
export declare class Outcome extends SpeakeasyBase {
    /**
     * Details for an outcome with a FAILURE outcome summary.
     */
    failureDetail?: FailureDetail;
    /**
     * Details for an outcome with an INCONCLUSIVE outcome summary.
     */
    inconclusiveDetail?: InconclusiveDetail;
    /**
     * Details for an outcome with a SKIPPED outcome summary.
     */
    skippedDetail?: SkippedDetail;
    /**
     * Details for an outcome with a SUCCESS outcome summary. LINT.IfChange
     */
    successDetail?: SuccessDetail;
    /**
     * The simplest way to interpret a result. Required
     */
    summary?: OutcomeSummaryEnum;
}
