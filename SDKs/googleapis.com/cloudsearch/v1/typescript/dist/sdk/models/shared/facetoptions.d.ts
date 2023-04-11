import { SpeakeasyBase } from "../../../internal/utils";
import { IntegerFacetingOptions } from "./integerfacetingoptions";
/**
 * Specifies operators to return facet results for. There will be one FacetResult for every source_name/object_type/operator_name combination.
 */
export declare class FacetOptions extends SpeakeasyBase {
    /**
     * Used to specify integer faceting options.
     */
    integerFacetingOptions?: IntegerFacetingOptions;
    /**
     * Maximum number of facet buckets that should be returned for this facet. Defaults to 10. Maximum value is 100.
     */
    numFacetBuckets?: number;
    /**
     * If object_type is set, only those objects of that type will be used to compute facets. If empty, then all objects will be used to compute facets.
     */
    objectType?: string;
    /**
     * The name of the operator chosen for faceting. @see cloudsearch.SchemaPropertyOptions
     */
    operatorName?: string;
    /**
     * Source name to facet on. Format: datasources/{source_id} If empty, all data sources will be used.
     */
    sourceName?: string;
}
