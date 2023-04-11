import { SpeakeasyBase } from "../../../internal/utils";
/**
 * UI display hints for rendering the label.
 */
export declare class GoogleAppsDriveLabelsV2LabelDisplayHints extends SpeakeasyBase {
    /**
     * Whether the label should be shown in the UI as disabled.
     */
    disabled?: boolean;
    /**
     * This label should be hidden in the search menu when searching for Drive items.
     */
    hiddenInSearch?: boolean;
    /**
     * Order to display label in a list.
     */
    priority?: string;
    /**
     * This label should be shown in the apply menu when applying values to a Drive item.
     */
    shownInApply?: boolean;
}
