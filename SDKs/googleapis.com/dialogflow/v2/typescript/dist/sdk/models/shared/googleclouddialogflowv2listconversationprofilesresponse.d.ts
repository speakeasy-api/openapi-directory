import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2ConversationProfile } from "./googleclouddialogflowv2conversationprofile";
/**
 * The response message for ConversationProfiles.ListConversationProfiles.
 */
export declare class GoogleCloudDialogflowV2ListConversationProfilesResponse extends SpeakeasyBase {
    /**
     * The list of project conversation profiles. There is a maximum number of items returned based on the page_size field in the request.
     */
    conversationProfiles?: GoogleCloudDialogflowV2ConversationProfile[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
}
