import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2FieldProperties } from "./googleappsdrivelabelsv2fieldproperties";
/**
 * Request to update Field properties.
 */
export declare class GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateFieldPropertiesRequest extends SpeakeasyBase {
    /**
     * Required. The Field to update.
     */
    id?: string;
    /**
     * The basic properties of the field.
     */
    properties?: GoogleAppsDriveLabelsV2FieldProperties;
    /**
     * The fields that should be updated. At least one field must be specified. The root `properties` is implied and should not be specified. A single `*` can be used as short-hand for updating every field.
     */
    updateMask?: string;
}
