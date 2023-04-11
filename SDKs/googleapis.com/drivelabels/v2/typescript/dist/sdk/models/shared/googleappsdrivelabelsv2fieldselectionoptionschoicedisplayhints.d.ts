import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2BadgeColors } from "./googleappsdrivelabelsv2badgecolors";
/**
 * UI display hints for rendering an option.
 */
export declare class GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints extends SpeakeasyBase {
    /**
     * The color derived from BadgeConfig and changed to the closest recommended supported color.
     */
    badgeColors?: GoogleAppsDriveLabelsV2BadgeColors;
    /**
     * The priority of this badge. Used to compare and sort between multiple badges. A lower number means the badge should be shown first. When a badging configuration is not present, this will be 0. Otherwise, this will be set to `BadgeConfig.priority_override` or the default heuristic which prefers creation date of the label, and field and option priority.
     */
    badgePriority?: string;
    /**
     * The color derived from BadgeConfig and changed to the closest recommended supported color.
     */
    darkBadgeColors?: GoogleAppsDriveLabelsV2BadgeColors;
    /**
     * Whether the option should be shown in the UI as disabled.
     */
    disabled?: boolean;
    /**
     * This option should be hidden in the search menu when searching for Drive items.
     */
    hiddenInSearch?: boolean;
    /**
     * This option should be shown in the apply menu when applying values to a Drive item.
     */
    shownInApply?: boolean;
}
