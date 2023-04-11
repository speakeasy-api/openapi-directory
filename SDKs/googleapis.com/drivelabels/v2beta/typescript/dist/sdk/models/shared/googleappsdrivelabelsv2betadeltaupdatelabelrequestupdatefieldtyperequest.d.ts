import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaFieldDateOptionsInput } from "./googleappsdrivelabelsv2betafielddateoptions";
import { GoogleAppsDriveLabelsV2betaFieldSelectionOptionsInput } from "./googleappsdrivelabelsv2betafieldselectionoptions";
import { GoogleAppsDriveLabelsV2betaFieldUserOptions } from "./googleappsdrivelabelsv2betafielduseroptions";
/**
 * Request to change the type of a Field.
 */
export declare class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequestInput extends SpeakeasyBase {
    /**
     * Options for the date field type.
     */
    dateOptions?: GoogleAppsDriveLabelsV2betaFieldDateOptionsInput;
    /**
     * Required. The Field to update.
     */
    id?: string;
    /**
     * Options for the selection field type.
     */
    selectionOptions?: GoogleAppsDriveLabelsV2betaFieldSelectionOptionsInput;
    /**
     * The fields that should be updated. At least one field must be specified. The root of `type_options` is implied and should not be specified. A single `*` can be used as short-hand for updating every field.
     */
    updateMask?: string;
    /**
     * Options for the user field type.
     */
    userOptions?: GoogleAppsDriveLabelsV2betaFieldUserOptions;
}
