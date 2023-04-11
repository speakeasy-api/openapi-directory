import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3Deployment } from "./googleclouddialogflowcxv3deployment";
/**
 * The response message for Deployments.ListDeployments.
 */
export declare class GoogleCloudDialogflowCxV3ListDeploymentsResponse extends SpeakeasyBase {
    /**
     * The list of deployments. There will be a maximum number of items returned based on the page_size field in the request. The list may in some cases be empty or contain fewer entries than page_size even if this isn't the last page.
     */
    deployments?: GoogleCloudDialogflowCxV3Deployment[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
}
