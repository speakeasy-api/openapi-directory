import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2AssistQueryParameters } from "./googleclouddialogflowv2assistqueryparameters";
/**
 * The request message for Conversations.SuggestConversationSummary.
 */
export declare class GoogleCloudDialogflowV2SuggestConversationSummaryRequest extends SpeakeasyBase {
    /**
     * Represents the parameters of human assist query.
     */
    assistQueryParams?: GoogleCloudDialogflowV2AssistQueryParameters;
    /**
     * Max number of messages prior to and including [latest_message] to use as context when compiling the suggestion. By default 500 and at most 1000.
     */
    contextSize?: number;
    /**
     * The name of the latest conversation message used as context for compiling suggestion. If empty, the latest message of the conversation will be used. Format: `projects//locations//conversations//messages/`.
     */
    latestMessage?: string;
}
