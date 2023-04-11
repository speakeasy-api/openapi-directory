import { SpeakeasyBase } from "../../../internal/utils";
import { CompositeFilter } from "./compositefilter";
import { PropertyFilter } from "./propertyfilter";
/**
 * A holder for any type of filter.
 */
export declare class Filter extends SpeakeasyBase {
    /**
     * A filter that merges multiple other filters using the given operator.
     */
    compositeFilter?: CompositeFilter;
    /**
     * A filter on a specific property.
     */
    propertyFilter?: PropertyFilter;
}
