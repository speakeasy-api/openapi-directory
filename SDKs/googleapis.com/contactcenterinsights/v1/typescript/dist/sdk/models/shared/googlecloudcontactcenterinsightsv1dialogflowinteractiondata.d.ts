import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Dialogflow interaction data.
 */
export declare class GoogleCloudContactcenterinsightsV1DialogflowInteractionData extends SpeakeasyBase {
    /**
     * The confidence of the match ranging from 0.0 (completely uncertain) to 1.0 (completely certain).
     */
    confidence?: number;
    /**
     * The Dialogflow intent resource path. Format: projects/{project}/agent/{agent}/intents/{intent}
     */
    dialogflowIntentId?: string;
}
