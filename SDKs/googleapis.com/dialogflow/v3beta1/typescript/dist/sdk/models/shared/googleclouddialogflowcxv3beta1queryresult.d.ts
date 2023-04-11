import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1DtmfInput } from "./googleclouddialogflowcxv3beta1dtmfinput";
import { GoogleCloudDialogflowCxV3beta1Intent } from "./googleclouddialogflowcxv3beta1intent";
import { GoogleCloudDialogflowCxV3beta1Match } from "./googleclouddialogflowcxv3beta1match";
import { GoogleCloudDialogflowCxV3beta1Page } from "./googleclouddialogflowcxv3beta1page";
import { GoogleCloudDialogflowCxV3beta1ResponseMessage } from "./googleclouddialogflowcxv3beta1responsemessage";
import { GoogleCloudDialogflowCxV3beta1SentimentAnalysisResult } from "./googleclouddialogflowcxv3beta1sentimentanalysisresult";
import { GoogleRpcStatus } from "./googlerpcstatus";
/**
 * Represents the result of a conversational query.
 */
export declare class GoogleCloudDialogflowCxV3beta1QueryResult extends SpeakeasyBase {
    /**
     * A Dialogflow CX conversation (session) can be described and visualized as a state machine. The states of a CX session are represented by pages. For each flow, you define many pages, where your combined pages can handle a complete conversation on the topics the flow is designed for. At any given moment, exactly one page is the current page, the current page is considered active, and the flow associated with that page is considered active. Every flow has a special start page. When a flow initially becomes active, the start page page becomes the current page. For each conversational turn, the current page will either stay the same or transition to another page. You configure each page to collect information from the end-user that is relevant for the conversational state represented by the page. For more information, see the [Page guide](https://cloud.google.com/dialogflow/cx/docs/concept/page).
     */
    currentPage?: GoogleCloudDialogflowCxV3beta1Page;
    /**
     * The free-form diagnostic info. For example, this field could contain webhook call latency. The fields of this data can change without notice, so you should not write code that depends on its structure. One of the fields is called "Alternative Matched Intents", which may aid with debugging. The following describes these intent results: - The list is empty if no intent was matched to end-user input. - Only intents that are referenced in the currently active flow are included. - The matched intent is included. - Other intents that could have matched end-user input, but did not match because they are referenced by intent routes that are out of [scope](https://cloud.google.com/dialogflow/cx/docs/concept/handler#scope), are included. - Other intents referenced by intent routes in scope that matched end-user input, but had a lower confidence score.
     */
    diagnosticInfo?: Record<string, any>;
    /**
     * Represents the input for dtmf event.
     */
    dtmf?: GoogleCloudDialogflowCxV3beta1DtmfInput;
    /**
     * An intent represents a user's intent to interact with a conversational agent. You can provide information for the Dialogflow API to use to match user input to an intent by adding training phrases (i.e., examples of user input) to your intent.
     */
    intent?: GoogleCloudDialogflowCxV3beta1Intent;
    /**
     * The intent detection confidence. Values range from 0.0 (completely uncertain) to 1.0 (completely certain). This value is for informational purpose only and is only used to help match the best intent within the classification threshold. This value may change for the same end-user expression at any time due to a model retraining or change in implementation. This field is deprecated, please use QueryResult.match instead.
     */
    intentDetectionConfidence?: number;
    /**
     * The language that was triggered during intent detection. See [Language Support](https://cloud.google.com/dialogflow/cx/docs/reference/language) for a list of the currently supported language codes.
     */
    languageCode?: string;
    /**
     * Represents one match result of MatchIntent.
     */
    match?: GoogleCloudDialogflowCxV3beta1Match;
    /**
     * The collected session parameters. Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs: * MapKey type: string * MapKey value: parameter name * MapValue type: If parameter's entity type is a composite entity then use map, otherwise, depending on the parameter value type, it could be one of string, number, boolean, null, list or map. * MapValue value: If parameter's entity type is a composite entity then use map from composite entity property names to property values, otherwise, use parameter value.
     */
    parameters?: Record<string, any>;
    /**
     * The list of rich messages returned to the client. Responses vary from simple text messages to more sophisticated, structured payloads used to drive complex logic.
     */
    responseMessages?: GoogleCloudDialogflowCxV3beta1ResponseMessage[];
    /**
     * The result of sentiment analysis. Sentiment analysis inspects user input and identifies the prevailing subjective opinion, especially to determine a user's attitude as positive, negative, or neutral.
     */
    sentimentAnalysisResult?: GoogleCloudDialogflowCxV3beta1SentimentAnalysisResult;
    /**
     * If natural language text was provided as input, this field will contain a copy of the text.
     */
    text?: string;
    /**
     * If natural language speech audio was provided as input, this field will contain the transcript for the audio.
     */
    transcript?: string;
    /**
     * If an event was provided as input, this field will contain the name of the event.
     */
    triggerEvent?: string;
    /**
     * If an intent was provided as input, this field will contain a copy of the intent identifier. Format: `projects//locations//agents//intents/`.
     */
    triggerIntent?: string;
    /**
     * The list of webhook payload in WebhookResponse.payload, in the order of call sequence. If some webhook call fails or doesn't return any payload, an empty `Struct` would be used instead.
     */
    webhookPayloads?: Record<string, any>[];
    /**
     * The list of webhook call status in the order of call sequence.
     */
    webhookStatuses?: GoogleRpcStatus[];
}
