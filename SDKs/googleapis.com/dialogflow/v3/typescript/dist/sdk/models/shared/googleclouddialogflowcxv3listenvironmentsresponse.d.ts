import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3Environment } from "./googleclouddialogflowcxv3environment";
/**
 * The response message for Environments.ListEnvironments.
 */
export declare class GoogleCloudDialogflowCxV3ListEnvironmentsResponse extends SpeakeasyBase {
    /**
     * The list of environments. There will be a maximum number of items returned based on the page_size field in the request. The list may in some cases be empty or contain fewer entries than page_size even if this isn't the last page.
     */
    environments?: GoogleCloudDialogflowCxV3Environment[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
}
