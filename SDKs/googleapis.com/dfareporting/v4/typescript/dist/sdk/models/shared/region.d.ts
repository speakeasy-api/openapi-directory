import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about a region that can be targeted by ads.
 */
export declare class Region extends SpeakeasyBase {
    /**
     * Country code of the country to which this region belongs.
     */
    countryCode?: string;
    /**
     * DART ID of the country to which this region belongs.
     */
    countryDartId?: string;
    /**
     * DART ID of this region.
     */
    dartId?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#region".
     */
    kind?: string;
    /**
     * Name of this region.
     */
    name?: string;
    /**
     * Region code.
     */
    regionCode?: string;
}
