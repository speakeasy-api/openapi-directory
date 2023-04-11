import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2Intent } from "./googleclouddialogflowv2intent";
/**
 * The response message for Intents.ListIntents.
 */
export declare class GoogleCloudDialogflowV2ListIntentsResponse extends SpeakeasyBase {
    /**
     * The list of agent intents. There will be a maximum number of items returned based on the page_size field in the request.
     */
    intents?: GoogleCloudDialogflowV2Intent[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
}
