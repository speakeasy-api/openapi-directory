import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2SuggestArticlesResponse } from "./googleclouddialogflowv2suggestarticlesresponse";
import { GoogleCloudDialogflowV2SuggestFaqAnswersResponse } from "./googleclouddialogflowv2suggestfaqanswersresponse";
import { GoogleCloudDialogflowV2SuggestSmartRepliesResponse } from "./googleclouddialogflowv2suggestsmartrepliesresponse";
import { GoogleRpcStatus } from "./googlerpcstatus";
/**
 * One response of different type of suggestion response which is used in the response of Participants.AnalyzeContent and Participants.AnalyzeContent, as well as HumanAgentAssistantEvent.
 */
export declare class GoogleCloudDialogflowV2SuggestionResult extends SpeakeasyBase {
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    error?: GoogleRpcStatus;
    /**
     * The response message for Participants.SuggestArticles.
     */
    suggestArticlesResponse?: GoogleCloudDialogflowV2SuggestArticlesResponse;
    /**
     * The request message for Participants.SuggestFaqAnswers.
     */
    suggestFaqAnswersResponse?: GoogleCloudDialogflowV2SuggestFaqAnswersResponse;
    /**
     * The response message for Participants.SuggestSmartReplies.
     */
    suggestSmartRepliesResponse?: GoogleCloudDialogflowV2SuggestSmartRepliesResponse;
}
