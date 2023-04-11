import { SpeakeasyBase } from "../../../internal/utils";
import { RestrictionChange } from "./restrictionchange";
/**
 * Information about settings changes.
 */
export declare class SettingsChange extends SpeakeasyBase {
    /**
     * The set of changes made to restrictions.
     */
    restrictionChanges?: RestrictionChange[];
}
