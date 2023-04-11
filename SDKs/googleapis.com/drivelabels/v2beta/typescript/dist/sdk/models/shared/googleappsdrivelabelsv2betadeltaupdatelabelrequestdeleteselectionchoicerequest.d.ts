import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to delete a Choice.
 */
export declare class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteSelectionChoiceRequest extends SpeakeasyBase {
    /**
     * Required. The Selection Field from which a Choice will be deleted.
     */
    fieldId?: string;
    /**
     * Required. Choice to delete.
     */
    id?: string;
}
