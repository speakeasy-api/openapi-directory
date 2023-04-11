import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1AssistQueryParameters } from "./googleclouddialogflowv2beta1assistqueryparameters";
import { GoogleCloudDialogflowV2beta1AudioInput } from "./googleclouddialogflowv2beta1audioinput";
import { GoogleCloudDialogflowV2beta1EventInput } from "./googleclouddialogflowv2beta1eventinput";
import { GoogleCloudDialogflowV2beta1OutputAudioConfig } from "./googleclouddialogflowv2beta1outputaudioconfig";
import { GoogleCloudDialogflowV2beta1QueryParameters } from "./googleclouddialogflowv2beta1queryparameters";
import { GoogleCloudDialogflowV2beta1TextInput } from "./googleclouddialogflowv2beta1textinput";
/**
 * The request message for Participants.AnalyzeContent.
 */
export declare class GoogleCloudDialogflowV2beta1AnalyzeContentRequest extends SpeakeasyBase {
    /**
     * Represents the parameters of human assist query.
     */
    assistQueryParams?: GoogleCloudDialogflowV2beta1AssistQueryParameters;
    /**
     * Represents the natural language speech audio to be processed.
     */
    audioInput?: GoogleCloudDialogflowV2beta1AudioInput;
    /**
     * The unique identifier of the CX page to override the `current_page` in the session. Format: `projects//locations//agents//flows//pages/`. If `cx_current_page` is specified, the previous state of the session will be ignored by Dialogflow CX, including the previous page and the previous session parameters. In most cases, `cx_current_page` and `cx_parameters` should be configured together to direct a session to a specific state. Note: this field should only be used if you are connecting to a Dialogflow CX agent.
     */
    cxCurrentPage?: string;
    /**
     * Additional parameters to be put into Dialogflow CX session parameters. To remove a parameter from the session, clients should explicitly set the parameter value to null. Note: this field should only be used if you are connecting to a Dialogflow CX agent.
     */
    cxParameters?: Record<string, any>;
    /**
     * Events allow for matching intents by event name instead of the natural language input. For instance, input `` can trigger a personalized welcome response. The parameter `name` may be used by the agent in the response: `"Hello #welcome_event.name! What can I do for you today?"`.
     */
    eventInput?: GoogleCloudDialogflowV2beta1EventInput;
    /**
     * Optional. The send time of the message from end user or human agent's perspective. It is used for identifying the same message under one participant. Given two messages under the same participant: - If send time are different regardless of whether the content of the messages are exactly the same, the conversation will regard them as two distinct messages sent by the participant. - If send time is the same regardless of whether the content of the messages are exactly the same, the conversation will regard them as same message, and ignore the message received later. If the value is not provided, a new request will always be regarded as a new message without any de-duplication.
     */
    messageSendTime?: string;
    /**
     * Represents the parameters of the conversational query.
     */
    queryParams?: GoogleCloudDialogflowV2beta1QueryParameters;
    /**
     * Instructs the speech synthesizer how to generate the output audio content. If this audio config is supplied in a request, it overrides all existing text-to-speech settings applied to the agent.
     */
    replyAudioConfig?: GoogleCloudDialogflowV2beta1OutputAudioConfig;
    /**
     * A unique identifier for this request. Restricted to 36 ASCII characters. A random UUID is recommended. This request is only idempotent if a `request_id` is provided.
     */
    requestId?: string;
    /**
     * Represents the natural language text to be processed.
     */
    textInput?: GoogleCloudDialogflowV2beta1TextInput;
}
