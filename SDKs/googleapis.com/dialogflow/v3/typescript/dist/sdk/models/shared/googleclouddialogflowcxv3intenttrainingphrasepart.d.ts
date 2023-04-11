import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a part of a training phrase.
 */
export declare class GoogleCloudDialogflowCxV3IntentTrainingPhrasePart extends SpeakeasyBase {
    /**
     * The parameter used to annotate this part of the training phrase. This field is required for annotated parts of the training phrase.
     */
    parameterId?: string;
    /**
     * Required. The text for this part.
     */
    text?: string;
}
