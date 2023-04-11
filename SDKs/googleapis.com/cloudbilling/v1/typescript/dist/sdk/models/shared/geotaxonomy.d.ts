import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of Geo Taxonomy: GLOBAL, REGIONAL, or MULTI_REGIONAL.
 */
export declare enum GeoTaxonomyTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Global = "GLOBAL",
    Regional = "REGIONAL",
    MultiRegional = "MULTI_REGIONAL"
}
/**
 * Encapsulates the geographic taxonomy data for a sku.
 */
export declare class GeoTaxonomy extends SpeakeasyBase {
    /**
     * The list of regions associated with a sku. Empty for Global skus, which are associated with all Google Cloud regions.
     */
    regions?: string[];
    /**
     * The type of Geo Taxonomy: GLOBAL, REGIONAL, or MULTI_REGIONAL.
     */
    type?: GeoTaxonomyTypeEnum;
}
