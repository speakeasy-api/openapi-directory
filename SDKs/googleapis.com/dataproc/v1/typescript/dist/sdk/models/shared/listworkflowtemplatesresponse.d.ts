import { SpeakeasyBase } from "../../../internal/utils";
import { WorkflowTemplate } from "./workflowtemplate";
/**
 * A response to a request to list workflow templates in a project.
 */
export declare class ListWorkflowTemplatesResponse extends SpeakeasyBase {
    /**
     * Output only. This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent ListWorkflowTemplatesRequest.
     */
    nextPageToken?: string;
    /**
     * Output only. WorkflowTemplates list.
     */
    templates?: WorkflowTemplate[];
}
