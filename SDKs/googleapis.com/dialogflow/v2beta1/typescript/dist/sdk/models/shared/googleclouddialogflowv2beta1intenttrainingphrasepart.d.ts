import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a part of a training phrase.
 */
export declare class GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart extends SpeakeasyBase {
    /**
     * Optional. The parameter name for the value extracted from the annotated part of the example. This field is required for annotated parts of the training phrase.
     */
    alias?: string;
    /**
     * Optional. The entity type name prefixed with `@`. This field is required for annotated parts of the training phrase.
     */
    entityType?: string;
    /**
     * Required. The text for this part.
     */
    text?: string;
    /**
     * Optional. Indicates whether the text was manually annotated. This field is set to true when the Dialogflow Console is used to manually annotate the part. When creating an annotated part with the API, you must set this to true.
     */
    userDefined?: boolean;
}
