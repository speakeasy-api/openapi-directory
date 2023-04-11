import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3Agent } from "./googleclouddialogflowcxv3agent";
/**
 * The response message for Agents.ListAgents.
 */
export declare class GoogleCloudDialogflowCxV3ListAgentsResponse extends SpeakeasyBase {
    /**
     * The list of agents. There will be a maximum number of items returned based on the page_size field in the request.
     */
    agents?: GoogleCloudDialogflowCxV3Agent[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
}
