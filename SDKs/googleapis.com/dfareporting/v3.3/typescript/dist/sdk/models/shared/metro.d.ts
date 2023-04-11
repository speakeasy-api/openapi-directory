import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about a metro region that can be targeted by ads.
 */
export declare class Metro extends SpeakeasyBase {
    /**
     * Country code of the country to which this metro region belongs.
     */
    countryCode?: string;
    /**
     * DART ID of the country to which this metro region belongs.
     */
    countryDartId?: string;
    /**
     * DART ID of this metro region.
     */
    dartId?: string;
    /**
     * DMA ID of this metro region. This is the ID used for targeting and generating reports, and is equivalent to metro_code.
     */
    dmaId?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#metro".
     */
    kind?: string;
    /**
     * Metro code of this metro region. This is equivalent to dma_id.
     */
    metroCode?: string;
    /**
     * Name of this metro region.
     */
    name?: string;
}
