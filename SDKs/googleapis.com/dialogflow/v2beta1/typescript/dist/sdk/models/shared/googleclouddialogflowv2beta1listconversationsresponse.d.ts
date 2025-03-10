import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1Conversation } from "./googleclouddialogflowv2beta1conversation";
/**
 * The response message for Conversations.ListConversations.
 */
export declare class GoogleCloudDialogflowV2beta1ListConversationsResponse extends SpeakeasyBase {
    /**
     * The list of conversations. There will be a maximum number of items returned based on the page_size field in the request.
     */
    conversations?: GoogleCloudDialogflowV2beta1Conversation[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
}
