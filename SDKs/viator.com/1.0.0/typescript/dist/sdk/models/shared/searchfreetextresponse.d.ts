import { SpeakeasyBase } from "../../../internal/utils";
/**
 * **indicator** of the entity type for *this* result that is *one of*:
 *
 * @remarks
 *   - `"PRODUCT"`: a tour / activity
 *   - `"DESTINATION"`: continent, country, city, region
 *   - `"ATTRACTION"`: an attraction within a destination (only available to partners with SEO access)
 *   - `"RECOMMENDATION"`: an attraction within a destination (only available to partners with SEO access)
 *
 */
export declare enum SearchFreetextResponseSearchTypeEnum {
    Product = "PRODUCT",
    Destination = "DESTINATION",
    Attraction = "ATTRACTION",
    Recommendation = "RECOMMENDATION"
}
export declare class SearchFreetextResponse extends SpeakeasyBase {
    /**
     * **indicator** of the entity type for *this* result that is *one of*:
     *
     * @remarks
     *   - `"PRODUCT"`: a tour / activity
     *   - `"DESTINATION"`: continent, country, city, region
     *   - `"ATTRACTION"`: an attraction within a destination (only available to partners with SEO access)
     *   - `"RECOMMENDATION"`: an attraction within a destination (only available to partners with SEO access)
     *
     */
    searchType?: SearchFreetextResponseSearchTypeEnum;
    /**
     * **sort order** for *this* data object
     */
    sortOrder?: number;
}
