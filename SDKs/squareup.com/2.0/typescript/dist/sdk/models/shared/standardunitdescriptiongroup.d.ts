import { SpeakeasyBase } from "../../../internal/utils";
import { StandardUnitDescription } from "./standardunitdescription";
/**
 * Group of standard measurement units.
 */
export declare class StandardUnitDescriptionGroup extends SpeakeasyBase {
    /**
     * IETF language tag.
     */
    languageCode?: string;
    /**
     * List of standard (non-custom) measurement units in this description group.
     */
    standardUnitDescriptions?: StandardUnitDescription[];
}
