import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1ResponseMessageLiveAgentHandoff } from "./googleclouddialogflowv2beta1responsemessageliveagenthandoff";
import { GoogleCloudDialogflowV2beta1ResponseMessageMixedAudio } from "./googleclouddialogflowv2beta1responsemessagemixedaudio";
import { GoogleCloudDialogflowV2beta1ResponseMessageTelephonyTransferCall } from "./googleclouddialogflowv2beta1responsemessagetelephonytransfercall";
import { GoogleCloudDialogflowV2beta1ResponseMessageText } from "./googleclouddialogflowv2beta1responsemessagetext";
/**
 * Response messages from an automated agent.
 */
export declare class GoogleCloudDialogflowV2beta1ResponseMessage extends SpeakeasyBase {
    /**
     * Indicates that interaction with the Dialogflow agent has ended.
     */
    endInteraction?: Record<string, any>;
    /**
     * Indicates that the conversation should be handed off to a human agent. Dialogflow only uses this to determine which conversations were handed off to a human agent for measurement purposes. What else to do with this signal is up to you and your handoff procedures. You may set this, for example: * In the entry fulfillment of a CX Page if entering the page indicates something went extremely wrong in the conversation. * In a webhook response when you determine that the customer issue can only be handled by a human.
     */
    liveAgentHandoff?: GoogleCloudDialogflowV2beta1ResponseMessageLiveAgentHandoff;
    /**
     * Represents an audio message that is composed of both segments synthesized from the Dialogflow agent prompts and ones hosted externally at the specified URIs.
     */
    mixedAudio?: GoogleCloudDialogflowV2beta1ResponseMessageMixedAudio;
    /**
     * Returns a response containing a custom, platform-specific payload.
     */
    payload?: Record<string, any>;
    /**
     * Represents the signal that telles the client to transfer the phone call connected to the agent to a third-party endpoint.
     */
    telephonyTransferCall?: GoogleCloudDialogflowV2beta1ResponseMessageTelephonyTransferCall;
    /**
     * The text response message.
     */
    text?: GoogleCloudDialogflowV2beta1ResponseMessageText;
}
