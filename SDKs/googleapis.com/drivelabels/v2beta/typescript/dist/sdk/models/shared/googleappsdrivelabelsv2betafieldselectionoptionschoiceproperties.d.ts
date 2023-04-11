import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaBadgeConfig } from "./googleappsdrivelabelsv2betabadgeconfig";
/**
 * Basic properties of the choice.
 */
export declare class GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties extends SpeakeasyBase {
    /**
     * Badge status of the label.
     */
    badgeConfig?: GoogleAppsDriveLabelsV2betaBadgeConfig;
    /**
     * The description of this label.
     */
    description?: string;
    /**
     * Required. The display text to show in the UI identifying this field.
     */
    displayName?: string;
    /**
     * Input only. Insert or move this choice before the indicated choice. If empty, the choice is placed at the end of the list.
     */
    insertBeforeChoice?: string;
}
