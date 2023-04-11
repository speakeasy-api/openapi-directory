import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1Conversation } from "./googlecloudcontactcenterinsightsv1conversation";
/**
 * The response of listing conversations.
 */
export declare class GoogleCloudContactcenterinsightsV1ListConversationsResponse extends SpeakeasyBase {
    /**
     * The conversations that match the request.
     */
    conversations?: GoogleCloudContactcenterinsightsV1Conversation[];
    /**
     * A token which can be sent as `page_token` to retrieve the next page. If this field is set, it means there is another page available. If it is not set, it means no other pages are available.
     */
    nextPageToken?: string;
}
