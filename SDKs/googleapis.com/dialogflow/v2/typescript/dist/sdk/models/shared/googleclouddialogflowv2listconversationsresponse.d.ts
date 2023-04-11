import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2Conversation } from "./googleclouddialogflowv2conversation";
/**
 * The response message for Conversations.ListConversations.
 */
export declare class GoogleCloudDialogflowV2ListConversationsResponse extends SpeakeasyBase {
    /**
     * The list of conversations. There will be a maximum number of items returned based on the page_size field in the request.
     */
    conversations?: GoogleCloudDialogflowV2Conversation[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
}
