import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Dialogflow source of conversation data.
 */
export declare class GoogleCloudContactcenterinsightsV1DialogflowSource extends SpeakeasyBase {
    /**
     * Cloud Storage URI that points to a file that contains the conversation audio.
     */
    audioUri?: string;
    /**
     * Output only. The name of the Dialogflow conversation that this conversation resource is derived from. Format: projects/{project}/locations/{location}/conversations/{conversation}
     */
    dialogflowConversation?: string;
}
/**
 * A Dialogflow source of conversation data.
 */
export declare class GoogleCloudContactcenterinsightsV1DialogflowSourceInput extends SpeakeasyBase {
    /**
     * Cloud Storage URI that points to a file that contains the conversation audio.
     */
    audioUri?: string;
}
