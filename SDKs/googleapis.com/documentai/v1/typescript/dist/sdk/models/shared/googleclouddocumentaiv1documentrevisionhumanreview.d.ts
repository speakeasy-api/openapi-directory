import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Human Review information of the document.
 */
export declare class GoogleCloudDocumentaiV1DocumentRevisionHumanReview extends SpeakeasyBase {
    /**
     * Human review state. e.g. `requested`, `succeeded`, `rejected`.
     */
    state?: string;
    /**
     * A message providing more details about the current state of processing. For example, the rejection reason when the state is `rejected`.
     */
    stateMessage?: string;
}
