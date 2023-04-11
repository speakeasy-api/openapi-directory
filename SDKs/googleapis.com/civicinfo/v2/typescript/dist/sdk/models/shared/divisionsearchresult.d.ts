import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a political geographic division that matches the requested query.
 */
export declare class DivisionSearchResult extends SpeakeasyBase {
    /**
     * Other Open Civic Data identifiers that refer to the same division -- for example, those that refer to other political divisions whose boundaries are defined to be coterminous with this one. For example, ocd-division/country:us/state:wy will include an alias of ocd-division/country:us/state:wy/cd:1, since Wyoming has only one Congressional district.
     */
    aliases?: string[];
    /**
     * The name of the division.
     */
    name?: string;
    /**
     * The unique Open Civic Data identifier for this division
     */
    ocdId?: string;
}
