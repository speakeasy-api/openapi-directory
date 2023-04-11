import { SpeakeasyBase } from "../../../internal/utils";
/**
 * UI display hints for rendering a field.
 */
export declare class GoogleAppsDriveLabelsV2betaFieldDisplayHints extends SpeakeasyBase {
    /**
     * Whether the field should be shown in the UI as disabled.
     */
    disabled?: boolean;
    /**
     * This field should be hidden in the search menu when searching for Drive items.
     */
    hiddenInSearch?: boolean;
    /**
     * Whether the field should be shown as required in the UI.
     */
    required?: boolean;
    /**
     * This field should be shown in the apply menu when applying values to a Drive item.
     */
    shownInApply?: boolean;
}
