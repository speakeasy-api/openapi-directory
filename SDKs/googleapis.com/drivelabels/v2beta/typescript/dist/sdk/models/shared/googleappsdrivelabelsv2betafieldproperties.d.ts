import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The basic properties of the field.
 */
export declare class GoogleAppsDriveLabelsV2betaFieldProperties extends SpeakeasyBase {
    /**
     * Required. The display text to show in the UI identifying this field.
     */
    displayName?: string;
    /**
     * Input only. Insert or move this field before the indicated field. If empty, the field is placed at the end of the list.
     */
    insertBeforeField?: string;
    /**
     * Whether the field should be marked as required.
     */
    required?: boolean;
}
