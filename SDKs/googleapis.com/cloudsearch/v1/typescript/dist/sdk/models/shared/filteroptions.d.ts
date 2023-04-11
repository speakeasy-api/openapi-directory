import { SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";
/**
 * Filter options to be applied on query.
 */
export declare class FilterOptions extends SpeakeasyBase {
    /**
     * A generic way of expressing filters in a query, which supports two approaches: **1. Setting a ValueFilter.** The name must match an operator_name defined in the schema for your data source. **2. Setting a CompositeFilter.** The filters are evaluated using the logical operator. The top-level operators can only be either an AND or a NOT. AND can appear only at the top-most level. OR can appear only under a top-level AND.
     */
    filter?: Filter;
    /**
     * If object_type is set, only objects of that type are returned. This should correspond to the name of the object that was registered within the definition of schema. The maximum length is 256 characters.
     */
    objectType?: string;
}
