import { SpeakeasyBase } from "../../../internal/utils";
import { DataIssueDetail } from "./dataissuedetail";
import { Image } from "./image";
import { LatLng } from "./latlng";
import { LocalizedText } from "./localizedtext";
import { Review } from "./review";
/**
 * A parsed listing
 */
export declare class ParsedListing extends SpeakeasyBase {
    /**
     * If not empty, it indicates that this listing belongs to a brand of the feed.
     */
    brand?: string;
    /**
     * The partner provided category (accommodation type) of the property.
     */
    category?: LocalizedText[];
    /**
     * Data issues about this listing
     */
    dataIssueDetail?: DataIssueDetail[];
    /**
     * Description of the property.
     */
    description?: LocalizedText[];
    /**
     * Images associated with this listing, localized.
     */
    image?: Image[];
    /**
     * Represents the accuracy of the location. The listing can be anywhere within the defined circular area.
     */
    imprecisionRadiusMeters?: number;
    /**
     * Whether the listing can be served based on non image data alone.
     */
    isServed?: boolean;
    /**
     * List of localized names.
     */
    listingName?: LocalizedText[];
    /**
     * An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges.
     */
    location?: LatLng;
    /**
     * The list id on partner lec feed, provided by partner.
     */
    partnerListId?: string;
    /**
     * The country code where the listing is located.
     */
    regionCode?: string;
    /**
     * Reviews associated with this listing. Each review proto has a single language attached to it.
     */
    review?: Review[];
    /**
     * VR List attribute.
     */
    unitAttributes?: Record<string, string>;
}
