import { SpeakeasyBase } from "../../../internal/utils";
import { Step } from "./step";
/**
 * Response message for StepService.List.
 */
export declare class ListStepsResponse extends SpeakeasyBase {
    /**
     * A continuation token to resume the query at the next item. If set, indicates that there are more steps to read, by calling list again with this value in the page_token field.
     */
    nextPageToken?: string;
    /**
     * Steps.
     */
    steps?: Step[];
}
