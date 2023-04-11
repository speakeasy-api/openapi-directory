import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Used to specify integer faceting options.
 */
export declare class IntegerFacetingOptions extends SpeakeasyBase {
    /**
     * Buckets for given integer values should be in strictly ascending order. For example, if values supplied are (1,5,10,100), the following facet buckets will be formed {<1, [1,5), [5-10), [10-100), >=100}.
     */
    integerBuckets?: string[];
}
