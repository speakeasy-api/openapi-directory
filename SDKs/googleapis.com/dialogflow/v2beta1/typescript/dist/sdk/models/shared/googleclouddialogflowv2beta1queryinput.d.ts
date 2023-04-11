import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1EventInput } from "./googleclouddialogflowv2beta1eventinput";
import { GoogleCloudDialogflowV2beta1InputAudioConfig } from "./googleclouddialogflowv2beta1inputaudioconfig";
import { GoogleCloudDialogflowV2beta1TelephonyDtmfEvents } from "./googleclouddialogflowv2beta1telephonydtmfevents";
import { GoogleCloudDialogflowV2beta1TextInput } from "./googleclouddialogflowv2beta1textinput";
/**
 * Represents the query input. It can contain either: 1. An audio config which instructs the speech recognizer how to process the speech audio. 2. A conversational query in the form of text. 3. An event that specifies which intent to trigger.
 */
export declare class GoogleCloudDialogflowV2beta1QueryInput extends SpeakeasyBase {
    /**
     * Instructs the speech recognizer on how to process the audio content.
     */
    audioConfig?: GoogleCloudDialogflowV2beta1InputAudioConfig;
    /**
     * A wrapper of repeated TelephonyDtmf digits.
     */
    dtmf?: GoogleCloudDialogflowV2beta1TelephonyDtmfEvents;
    /**
     * Events allow for matching intents by event name instead of the natural language input. For instance, input `` can trigger a personalized welcome response. The parameter `name` may be used by the agent in the response: `"Hello #welcome_event.name! What can I do for you today?"`.
     */
    event?: GoogleCloudDialogflowV2beta1EventInput;
    /**
     * Represents the natural language text to be processed.
     */
    text?: GoogleCloudDialogflowV2beta1TextInput;
}
