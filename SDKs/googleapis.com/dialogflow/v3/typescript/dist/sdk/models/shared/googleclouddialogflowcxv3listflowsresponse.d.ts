import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3Flow } from "./googleclouddialogflowcxv3flow";
/**
 * The response message for Flows.ListFlows.
 */
export declare class GoogleCloudDialogflowCxV3ListFlowsResponse extends SpeakeasyBase {
    /**
     * The list of flows. There will be a maximum number of items returned based on the page_size field in the request.
     */
    flows?: GoogleCloudDialogflowCxV3Flow[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
}
