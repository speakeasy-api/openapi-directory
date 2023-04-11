import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2Message } from "./googleclouddialogflowv2message";
/**
 * The response message for Conversations.ListMessages.
 */
export declare class GoogleCloudDialogflowV2ListMessagesResponse extends SpeakeasyBase {
    /**
     * The list of messages. There will be a maximum number of items returned based on the page_size field in the request. `messages` is sorted by `create_time` in descending order.
     */
    messages?: GoogleCloudDialogflowV2Message[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
}
