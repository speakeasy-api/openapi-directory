import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1Agent } from "./googleclouddialogflowv2beta1agent";
/**
 * The response message for Agents.SearchAgents.
 */
export declare class GoogleCloudDialogflowV2beta1SearchAgentsResponse extends SpeakeasyBase {
    /**
     * The list of agents. There will be a maximum number of items returned based on the page_size field in the request.
     */
    agents?: GoogleCloudDialogflowV2beta1Agent[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
}
