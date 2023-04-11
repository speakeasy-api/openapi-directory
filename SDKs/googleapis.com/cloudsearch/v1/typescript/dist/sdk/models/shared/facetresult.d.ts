import { SpeakeasyBase } from "../../../internal/utils";
import { FacetBucket } from "./facetbucket";
/**
 * Source specific facet response
 */
export declare class FacetResult extends SpeakeasyBase {
    /**
     * FacetBuckets for values in response containing at least a single result with the corresponding filter.
     */
    buckets?: FacetBucket[];
    /**
     * Object type for which facet results are returned. Can be empty.
     */
    objectType?: string;
    /**
     * The name of the operator chosen for faceting. @see cloudsearch.SchemaPropertyOptions
     */
    operatorName?: string;
    /**
     * Source name for which facet results are returned. Will not be empty.
     */
    sourceName?: string;
}
