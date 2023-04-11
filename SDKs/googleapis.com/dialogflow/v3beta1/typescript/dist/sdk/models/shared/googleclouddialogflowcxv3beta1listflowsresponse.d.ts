import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1Flow } from "./googleclouddialogflowcxv3beta1flow";
/**
 * The response message for Flows.ListFlows.
 */
export declare class GoogleCloudDialogflowCxV3beta1ListFlowsResponse extends SpeakeasyBase {
    /**
     * The list of flows. There will be a maximum number of items returned based on the page_size field in the request.
     */
    flows?: GoogleCloudDialogflowCxV3beta1Flow[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
}
