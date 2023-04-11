import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1Intent } from "./googleclouddialogflowcxv3beta1intent";
/**
 * The response message for Intents.ListIntents.
 */
export declare class GoogleCloudDialogflowCxV3beta1ListIntentsResponse extends SpeakeasyBase {
    /**
     * The list of intents. There will be a maximum number of items returned based on the page_size field in the request.
     */
    intents?: GoogleCloudDialogflowCxV3beta1Intent[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
}
