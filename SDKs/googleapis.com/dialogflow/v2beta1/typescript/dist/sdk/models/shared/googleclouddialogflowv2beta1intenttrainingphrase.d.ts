import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart } from "./googleclouddialogflowv2beta1intenttrainingphrasepart";
/**
 * Required. The type of the training phrase.
 */
export declare enum GoogleCloudDialogflowV2beta1IntentTrainingPhraseTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Example = "EXAMPLE",
    Template = "TEMPLATE"
}
/**
 * Represents an example that the agent is trained on.
 */
export declare class GoogleCloudDialogflowV2beta1IntentTrainingPhrase extends SpeakeasyBase {
    /**
     * Output only. The unique identifier of this training phrase.
     */
    name?: string;
    /**
     * Required. The ordered list of training phrase parts. The parts are concatenated in order to form the training phrase. Note: The API does not automatically annotate training phrases like the Dialogflow Console does. Note: Do not forget to include whitespace at part boundaries, so the training phrase is well formatted when the parts are concatenated. If the training phrase does not need to be annotated with parameters, you just need a single part with only the Part.text field set. If you want to annotate the training phrase, you must create multiple parts, where the fields of each part are populated in one of two ways: - `Part.text` is set to a part of the phrase that has no parameters. - `Part.text` is set to a part of the phrase that you want to annotate, and the `entity_type`, `alias`, and `user_defined` fields are all set.
     */
    parts?: GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart[];
    /**
     * Optional. Indicates how many times this example was added to the intent. Each time a developer adds an existing sample by editing an intent or training, this counter is increased.
     */
    timesAddedCount?: number;
    /**
     * Required. The type of the training phrase.
     */
    type?: GoogleCloudDialogflowV2beta1IntentTrainingPhraseTypeEnum;
}
