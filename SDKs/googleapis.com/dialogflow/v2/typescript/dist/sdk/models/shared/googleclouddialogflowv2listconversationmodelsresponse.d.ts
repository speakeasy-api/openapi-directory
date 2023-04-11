import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2ConversationModel } from "./googleclouddialogflowv2conversationmodel";
/**
 * The response message for ConversationModels.ListConversationModels
 */
export declare class GoogleCloudDialogflowV2ListConversationModelsResponse extends SpeakeasyBase {
    /**
     * The list of models to return.
     */
    conversationModels?: GoogleCloudDialogflowV2ConversationModel[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
}
