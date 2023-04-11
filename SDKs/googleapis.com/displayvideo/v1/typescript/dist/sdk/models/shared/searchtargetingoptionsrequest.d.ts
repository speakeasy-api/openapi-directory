import { SpeakeasyBase } from "../../../internal/utils";
import { BusinessChainSearchTerms } from "./businesschainsearchterms";
import { GeoRegionSearchTerms } from "./georegionsearchterms";
import { PoiSearchTerms } from "./poisearchterms";
/**
 * Request message for SearchTargetingOptions.
 */
export declare class SearchTargetingOptionsRequest extends SpeakeasyBase {
    /**
     * Required. The Advertiser this request is being made in the context of.
     */
    advertiserId?: string;
    /**
     * Search terms for Business Chain targeting options. At least one of the field should be populated.
     */
    businessChainSearchTerms?: BusinessChainSearchTerms;
    /**
     * Search terms for geo region targeting options.
     */
    geoRegionSearchTerms?: GeoRegionSearchTerms;
    /**
     * Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `SearchTargetingOptions` method. If not specified, the first page of results will be returned.
     */
    pageToken?: string;
    /**
     * Search terms for POI targeting options.
     */
    poiSearchTerms?: PoiSearchTerms;
}
