import { SpeakeasyBase } from "../../../internal/utils";
import { FilterOptions } from "./filteroptions";
import { Source } from "./source";
/**
 * Restriction on Datasource.
 */
export declare class DataSourceRestriction extends SpeakeasyBase {
    /**
     * Filter options restricting the results. If multiple filters are present, they are grouped by object type before joining. Filters with the same object type are joined conjunctively, then the resulting expressions are joined disjunctively. The maximum number of elements is 20. NOTE: Suggest API supports only few filters at the moment: "objecttype", "type" and "mimetype". For now, schema specific filters cannot be used to filter suggestions.
     */
    filterOptions?: FilterOptions[];
    /**
     * Defines sources for the suggest/search APIs.
     */
    source?: Source;
}
