import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties } from "./googleappsdrivelabelsv2fieldselectionoptionschoiceproperties";
/**
 * Request to update a Choice properties.
 */
export declare class GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest extends SpeakeasyBase {
    /**
     * Required. The Selection Field to update.
     */
    fieldId?: string;
    /**
     * Required. The Choice to update.
     */
    id?: string;
    /**
     * Basic properties of the choice.
     */
    properties?: GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties;
    /**
     * The fields that should be updated. At least one field must be specified. The root `properties` is implied and should not be specified. A single `*` can be used as short-hand for updating every field.
     */
    updateMask?: string;
}
