import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a single followup intent in the chain.
 */
export declare class GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo extends SpeakeasyBase {
    /**
     * The unique identifier of the followup intent. Format: `projects//agent/intents/`.
     */
    followupIntentName?: string;
    /**
     * The unique identifier of the followup intent's parent. Format: `projects//agent/intents/`.
     */
    parentFollowupIntentName?: string;
}
