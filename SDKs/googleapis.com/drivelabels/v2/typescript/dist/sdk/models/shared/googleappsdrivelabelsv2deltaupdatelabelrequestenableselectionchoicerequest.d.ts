import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to enable a Choice.
 */
export declare class GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestEnableSelectionChoiceRequest extends SpeakeasyBase {
    /**
     * Required. The Selection Field in which a Choice will be enabled.
     */
    fieldId?: string;
    /**
     * Required. Choice to enable.
     */
    id?: string;
}
