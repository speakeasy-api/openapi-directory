import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2ConversationModelEvaluation } from "./googleclouddialogflowv2conversationmodelevaluation";
/**
 * The response message for ConversationModels.ListConversationModelEvaluations
 */
export declare class GoogleCloudDialogflowV2ListConversationModelEvaluationsResponse extends SpeakeasyBase {
    /**
     * The list of evaluations to return.
     */
    conversationModelEvaluations?: GoogleCloudDialogflowV2ConversationModelEvaluation[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
}
