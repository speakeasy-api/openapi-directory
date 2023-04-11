import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1SmartReplyAnswer } from "./googleclouddialogflowv2beta1smartreplyanswer";
/**
 * The response message for Participants.SuggestSmartReplies.
 */
export declare class GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse extends SpeakeasyBase {
    /**
     * Number of messages prior to and including latest_message to compile the suggestion. It may be smaller than the SuggestSmartRepliesRequest.context_size field in the request if there aren't that many messages in the conversation.
     */
    contextSize?: number;
    /**
     * The name of the latest conversation message used to compile suggestion for. Format: `projects//locations//conversations//messages/`.
     */
    latestMessage?: string;
    /**
     * Output only. Multiple reply options provided by smart reply service. The order is based on the rank of the model prediction. The maximum number of the returned replies is set in SmartReplyConfig.
     */
    smartReplyAnswers?: GoogleCloudDialogflowV2beta1SmartReplyAnswer[];
}
