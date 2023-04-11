import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the intent to trigger programmatically rather than as a result of natural language processing.
 */
export declare class GoogleCloudDialogflowCxV3IntentInput extends SpeakeasyBase {
    /**
     * Required. The unique identifier of the intent. Format: `projects//locations//agents//intents/`.
     */
    intent?: string;
}
