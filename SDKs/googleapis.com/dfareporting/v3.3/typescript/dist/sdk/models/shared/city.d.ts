import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about a city that can be targeted by ads.
 */
export declare class City extends SpeakeasyBase {
    /**
     * Country code of the country to which this city belongs.
     */
    countryCode?: string;
    /**
     * DART ID of the country to which this city belongs.
     */
    countryDartId?: string;
    /**
     * DART ID of this city. This is the ID used for targeting and generating reports.
     */
    dartId?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#city".
     */
    kind?: string;
    /**
     * Metro region code of the metro region (DMA) to which this city belongs.
     */
    metroCode?: string;
    /**
     * ID of the metro region (DMA) to which this city belongs.
     */
    metroDmaId?: string;
    /**
     * Name of this city.
     */
    name?: string;
    /**
     * Region code of the region to which this city belongs.
     */
    regionCode?: string;
    /**
     * DART ID of the region to which this city belongs.
     */
    regionDartId?: string;
}
