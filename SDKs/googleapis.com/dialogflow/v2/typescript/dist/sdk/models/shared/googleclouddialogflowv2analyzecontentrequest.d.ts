import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2AssistQueryParameters } from "./googleclouddialogflowv2assistqueryparameters";
import { GoogleCloudDialogflowV2EventInput } from "./googleclouddialogflowv2eventinput";
import { GoogleCloudDialogflowV2OutputAudioConfig } from "./googleclouddialogflowv2outputaudioconfig";
import { GoogleCloudDialogflowV2QueryParameters } from "./googleclouddialogflowv2queryparameters";
import { GoogleCloudDialogflowV2TextInput } from "./googleclouddialogflowv2textinput";
/**
 * The request message for Participants.AnalyzeContent.
 */
export declare class GoogleCloudDialogflowV2AnalyzeContentRequest extends SpeakeasyBase {
    /**
     * Represents the parameters of human assist query.
     */
    assistQueryParams?: GoogleCloudDialogflowV2AssistQueryParameters;
    /**
     * Additional parameters to be put into Dialogflow CX session parameters. To remove a parameter from the session, clients should explicitly set the parameter value to null. Note: this field should only be used if you are connecting to a Dialogflow CX agent.
     */
    cxParameters?: Record<string, any>;
    /**
     * Events allow for matching intents by event name instead of the natural language input. For instance, input `` can trigger a personalized welcome response. The parameter `name` may be used by the agent in the response: `"Hello #welcome_event.name! What can I do for you today?"`.
     */
    eventInput?: GoogleCloudDialogflowV2EventInput;
    /**
     * Represents the parameters of the conversational query.
     */
    queryParams?: GoogleCloudDialogflowV2QueryParameters;
    /**
     * Instructs the speech synthesizer on how to generate the output audio content. If this audio config is supplied in a request, it overrides all existing text-to-speech settings applied to the agent.
     */
    replyAudioConfig?: GoogleCloudDialogflowV2OutputAudioConfig;
    /**
     * A unique identifier for this request. Restricted to 36 ASCII characters. A random UUID is recommended. This request is only idempotent if a `request_id` is provided.
     */
    requestId?: string;
    /**
     * ============================================================================ Auxiliary proto messages. Represents the natural language text to be processed.
     */
    textInput?: GoogleCloudDialogflowV2TextInput;
}
