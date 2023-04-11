import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1AssistQueryParameters } from "./googleclouddialogflowv2beta1assistqueryparameters";
/**
 * The request message for Participants.SuggestFaqAnswers.
 */
export declare class GoogleCloudDialogflowV2beta1SuggestFaqAnswersRequest extends SpeakeasyBase {
    /**
     * Represents the parameters of human assist query.
     */
    assistQueryParams?: GoogleCloudDialogflowV2beta1AssistQueryParameters;
    /**
     * Optional. Max number of messages prior to and including [latest_message] to use as context when compiling the suggestion. By default 20 and at most 50.
     */
    contextSize?: number;
    /**
     * Optional. The name of the latest conversation message to compile suggestion for. If empty, it will be the latest message of the conversation. Format: `projects//locations//conversations//messages/`.
     */
    latestMessage?: string;
}
