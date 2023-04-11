import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaFieldProperties } from "./googleappsdrivelabelsv2betafieldproperties";
/**
 * Request to update Field properties.
 */
export declare class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldPropertiesRequest extends SpeakeasyBase {
    /**
     * Required. The Field to update.
     */
    id?: string;
    /**
     * The basic properties of the field.
     */
    properties?: GoogleAppsDriveLabelsV2betaFieldProperties;
    /**
     * The fields that should be updated. At least one field must be specified. The root `properties` is implied and should not be specified. A single `*` can be used as short-hand for updating every field.
     */
    updateMask?: string;
}
