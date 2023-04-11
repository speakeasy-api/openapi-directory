import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of human review on the processing request.
 */
export declare enum GoogleCloudDocumentaiV1HumanReviewStatusStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Skipped = "SKIPPED",
    ValidationPassed = "VALIDATION_PASSED",
    InProgress = "IN_PROGRESS",
    Error = "ERROR"
}
/**
 * The status of human review on a processed document.
 */
export declare class GoogleCloudDocumentaiV1HumanReviewStatus extends SpeakeasyBase {
    /**
     * The name of the operation triggered by the processed document. This field is populated only when the [state] is [HUMAN_REVIEW_IN_PROGRESS]. It has the same response type and metadata as the long running operation returned by [ReviewDocument] method.
     */
    humanReviewOperation?: string;
    /**
     * The state of human review on the processing request.
     */
    state?: GoogleCloudDocumentaiV1HumanReviewStatusStateEnum;
    /**
     * A message providing more details about the human review state.
     */
    stateMessage?: string;
}
