import { SpeakeasyBase } from "../../../internal/utils";
import { Execution } from "./execution";
/**
 * Response for listing scheduled notebook executions
 */
export declare class ListExecutionsResponse extends SpeakeasyBase {
    /**
     * A list of returned instances.
     */
    executions?: Execution[];
    /**
     * Page token that can be used to continue listing from the last result in the next list call.
     */
    nextPageToken?: string;
    /**
     * Executions IDs that could not be reached. For example: ['projects/{project_id}/location/{location}/executions/imagenet_test1', 'projects/{project_id}/location/{location}/executions/classifier_train1']
     */
    unreachable?: string[];
}
