import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaListLimits } from "./googleappsdrivelabelsv2betalistlimits";
/**
 * Limits for selection Field type.
 */
export declare class GoogleAppsDriveLabelsV2betaSelectionLimits extends SpeakeasyBase {
    /**
     * Limits for list-variant of a Field type.
     */
    listLimits?: GoogleAppsDriveLabelsV2betaListLimits;
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
