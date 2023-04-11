import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2IntentBatchInput } from "./googleclouddialogflowv2intentbatch";
/**
 * Optional. The resource view to apply to the returned intent.
 */
export declare enum GoogleCloudDialogflowV2BatchUpdateIntentsRequestIntentViewEnum {
    IntentViewUnspecified = "INTENT_VIEW_UNSPECIFIED",
    IntentViewFull = "INTENT_VIEW_FULL"
}
export declare class GoogleCloudDialogflowV2BatchUpdateIntentsRequestInput extends SpeakeasyBase {
    /**
     * This message is a wrapper around a collection of intents.
     */
    intentBatchInline?: GoogleCloudDialogflowV2IntentBatchInput;
    /**
     * The URI to a Google Cloud Storage file containing intents to update or create. The file format can either be a serialized proto (of IntentBatch type) or JSON object. Note: The URI must start with "gs://".
     */
    intentBatchUri?: string;
    /**
     * Optional. The resource view to apply to the returned intent.
     */
    intentView?: GoogleCloudDialogflowV2BatchUpdateIntentsRequestIntentViewEnum;
    /**
     * Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     */
    languageCode?: string;
    /**
     * Optional. The mask to control which fields get updated.
     */
    updateMask?: string;
}
