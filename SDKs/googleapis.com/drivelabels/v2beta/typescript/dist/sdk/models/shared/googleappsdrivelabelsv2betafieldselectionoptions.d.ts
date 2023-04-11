import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaFieldListOptions } from "./googleappsdrivelabelsv2betafieldlistoptions";
import { GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice, GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput } from "./googleappsdrivelabelsv2betafieldselectionoptionschoice";
/**
 * Options for the selection field type.
 */
export declare class GoogleAppsDriveLabelsV2betaFieldSelectionOptions extends SpeakeasyBase {
    /**
     * The options available for this selection field. The list order is consistent, and modified with `insert_before_choice`.
     */
    choices?: GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice[];
    /**
     * Options for a multi-valued variant of an associated field type.
     */
    listOptions?: GoogleAppsDriveLabelsV2betaFieldListOptions;
}
/**
 * Options for the selection field type.
 */
export declare class GoogleAppsDriveLabelsV2betaFieldSelectionOptionsInput extends SpeakeasyBase {
    /**
     * The options available for this selection field. The list order is consistent, and modified with `insert_before_choice`.
     */
    choices?: GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput[];
    /**
     * Options for a multi-valued variant of an associated field type.
     */
    listOptions?: GoogleAppsDriveLabelsV2betaFieldListOptions;
}
