import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2ListLimits } from "./googleappsdrivelabelsv2listlimits";
/**
 * Limits for selection Field type.
 */
export declare class GoogleAppsDriveLabelsV2SelectionLimits extends SpeakeasyBase {
    /**
     * Limits for list-variant of a Field type.
     */
    listLimits?: GoogleAppsDriveLabelsV2ListLimits;
    /**
     * The max number of choices.
     */
    maxChoices?: number;
    /**
     * Maximum number of deleted choices.
     */
    maxDeletedChoices?: number;
    /**
     * Maximum length for display name.
     */
    maxDisplayNameLength?: number;
    /**
     * Maximum ID length for a selection options.
     */
    maxIdLength?: number;
}
