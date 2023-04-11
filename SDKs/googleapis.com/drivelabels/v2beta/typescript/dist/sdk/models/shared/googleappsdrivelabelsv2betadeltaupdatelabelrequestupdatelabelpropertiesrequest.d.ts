import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaLabelProperties } from "./googleappsdrivelabelsv2betalabelproperties";
/**
 * Updates basic properties of a Label.
 */
export declare class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateLabelPropertiesRequest extends SpeakeasyBase {
    /**
     * Basic properties of the label.
     */
    properties?: GoogleAppsDriveLabelsV2betaLabelProperties;
    /**
     * The fields that should be updated. At least one field must be specified. The root `label_properties` is implied and should not be specified. A single `*` can be used as short-hand for updating every field.
     */
    updateMask?: string;
}
