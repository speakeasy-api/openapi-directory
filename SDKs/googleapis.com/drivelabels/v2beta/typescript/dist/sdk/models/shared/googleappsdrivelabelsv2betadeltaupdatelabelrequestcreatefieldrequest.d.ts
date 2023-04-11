import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaFieldInput } from "./googleappsdrivelabelsv2betafield";
/**
 * Request to create a Field within a Label.
 */
export declare class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateFieldRequestInput extends SpeakeasyBase {
    /**
     * Defines a field that has a display name, data type, and other configuration options. This field defines the kind of metadata that may be set on a Drive item.
     */
    field?: GoogleAppsDriveLabelsV2betaFieldInput;
}
