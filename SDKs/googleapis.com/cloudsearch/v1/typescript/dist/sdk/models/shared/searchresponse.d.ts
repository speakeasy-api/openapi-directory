import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorInfo } from "./errorinfo";
import { FacetResult } from "./facetresult";
import { QueryInterpretation } from "./queryinterpretation";
import { ResponseDebugInfo } from "./responsedebuginfo";
import { ResultCounts } from "./resultcounts";
import { SearchResult } from "./searchresult";
import { SpellResult } from "./spellresult";
import { StructuredResult } from "./structuredresult";
/**
 * The search API response.
 */
export declare class SearchResponse extends SpeakeasyBase {
    /**
     * Debugging information about the response.
     */
    debugInfo?: ResponseDebugInfo;
    /**
     * Error information about the response.
     */
    errorInfo?: ErrorInfo;
    /**
     * Repeated facet results.
     */
    facetResults?: FacetResult[];
    /**
     * Whether there are more search results matching the query.
     */
    hasMoreResults?: boolean;
    queryInterpretation?: QueryInterpretation;
    /**
     * The estimated result count for this query.
     */
    resultCountEstimate?: string;
    /**
     * The exact result count for this query.
     */
    resultCountExact?: string;
    /**
     * Result count information
     */
    resultCounts?: ResultCounts;
    /**
     * Results from a search query.
     */
    results?: SearchResult[];
    /**
     * Suggested spelling for the query.
     */
    spellResults?: SpellResult[];
    /**
     * Structured results for the user query. These results are not counted against the page_size.
     */
    structuredResults?: StructuredResult[];
}
