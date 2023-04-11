import { SpeakeasyBase } from "../../../internal/utils";
import { Workflow } from "./workflow";
/**
 * Response for the ListWorkflows method.
 */
export declare class ListWorkflowsResponse extends SpeakeasyBase {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * Unreachable resources.
     */
    unreachable?: string[];
    /**
     * The workflows that match the request.
     */
    workflows?: Workflow[];
}
