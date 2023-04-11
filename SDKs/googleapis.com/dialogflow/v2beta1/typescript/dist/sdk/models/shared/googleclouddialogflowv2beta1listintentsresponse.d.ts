import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1Intent } from "./googleclouddialogflowv2beta1intent";
/**
 * The response message for Intents.ListIntents.
 */
export declare class GoogleCloudDialogflowV2beta1ListIntentsResponse extends SpeakeasyBase {
    /**
     * The list of agent intents. There will be a maximum number of items returned based on the page_size field in the request.
     */
    intents?: GoogleCloudDialogflowV2beta1Intent[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
}
