import { SpeakeasyBase } from "../../../internal/utils";
import { ContextAttribute } from "./contextattribute";
import { DataSourceRestriction } from "./datasourcerestriction";
import { FacetOptions } from "./facetoptions";
import { QueryInterpretationOptions } from "./queryinterpretationoptions";
import { RequestOptions } from "./requestoptions";
import { SortOptions } from "./sortoptions";
/**
 * The search API request.
 */
export declare class SearchRequest extends SpeakeasyBase {
    /**
     * Context attributes for the request which will be used to adjust ranking of search results. The maximum number of elements is 10.
     */
    contextAttributes?: ContextAttribute[];
    /**
     * The sources to use for querying. If not specified, all data sources from the current search application are used.
     */
    dataSourceRestrictions?: DataSourceRestriction[];
    facetOptions?: FacetOptions[];
    /**
     * Maximum number of search results to return in one page. Valid values are between 1 and 100, inclusive. Default value is 10. Minimum value is 50 when results beyond 2000 are requested.
     */
    pageSize?: number;
    /**
     * The raw query string. See supported search operators in the [Narrow your search with operators](https://support.google.com/cloudsearch/answer/6172299)
     */
    query?: string;
    /**
     * Options to interpret user query.
     */
    queryInterpretationOptions?: QueryInterpretationOptions;
    /**
     * Shared request options for all RPC methods.
     */
    requestOptions?: RequestOptions;
    sortOptions?: SortOptions;
    /**
     * Starting index of the results.
     */
    start?: number;
}
