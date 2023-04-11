import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2FieldListOptions } from "./googleappsdrivelabelsv2fieldlistoptions";
import { GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice, GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceInput } from "./googleappsdrivelabelsv2fieldselectionoptionschoice";
/**
 * Options for the selection field type.
 */
export declare class GoogleAppsDriveLabelsV2FieldSelectionOptions extends SpeakeasyBase {
    /**
     * The options available for this selection field. The list order is consistent, and modified with `insert_before_choice`.
     */
    choices?: GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice[];
    /**
     * Options for a multi-valued variant of an associated field type.
     */
    listOptions?: GoogleAppsDriveLabelsV2FieldListOptions;
}
/**
 * Options for the selection field type.
 */
export declare class GoogleAppsDriveLabelsV2FieldSelectionOptionsInput extends SpeakeasyBase {
    /**
     * The options available for this selection field. The list order is consistent, and modified with `insert_before_choice`.
     */
    choices?: GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceInput[];
    /**
     * Options for a multi-valued variant of an associated field type.
     */
    listOptions?: GoogleAppsDriveLabelsV2FieldListOptions;
}
