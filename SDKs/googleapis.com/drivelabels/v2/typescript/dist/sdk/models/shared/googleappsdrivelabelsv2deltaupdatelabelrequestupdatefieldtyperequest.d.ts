import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2FieldDateOptionsInput } from "./googleappsdrivelabelsv2fielddateoptions";
import { GoogleAppsDriveLabelsV2FieldSelectionOptionsInput } from "./googleappsdrivelabelsv2fieldselectionoptions";
import { GoogleAppsDriveLabelsV2FieldUserOptions } from "./googleappsdrivelabelsv2fielduseroptions";
/**
 * Request to change the type of a Field.
 */
export declare class GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateFieldTypeRequestInput extends SpeakeasyBase {
    /**
     * Options for the date field type.
     */
    dateOptions?: GoogleAppsDriveLabelsV2FieldDateOptionsInput;
    /**
     * Required. The Field to update.
     */
    id?: string;
    /**
     * Options for the selection field type.
     */
    selectionOptions?: GoogleAppsDriveLabelsV2FieldSelectionOptionsInput;
    /**
     * The fields that should be updated. At least one field must be specified. The root of `type_options` is implied and should not be specified. A single `*` can be used as short-hand for updating every field.
     */
    updateMask?: string;
    /**
     * Options for the user field type.
     */
    userOptions?: GoogleAppsDriveLabelsV2FieldUserOptions;
}
