import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2Agent } from "./googleclouddialogflowv2agent";
/**
 * The response message for Agents.SearchAgents.
 */
export declare class GoogleCloudDialogflowV2SearchAgentsResponse extends SpeakeasyBase {
    /**
     * The list of agents. There will be a maximum number of items returned based on the page_size field in the request.
     */
    agents?: GoogleCloudDialogflowV2Agent[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
}
