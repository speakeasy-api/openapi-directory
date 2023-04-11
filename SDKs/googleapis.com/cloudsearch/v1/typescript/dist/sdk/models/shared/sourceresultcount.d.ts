import { SpeakeasyBase } from "../../../internal/utils";
import { Source } from "./source";
/**
 * Per source result count information.
 */
export declare class SourceResultCount extends SpeakeasyBase {
    /**
     * Whether there are more search results for this source.
     */
    hasMoreResults?: boolean;
    /**
     * The estimated result count for this source.
     */
    resultCountEstimate?: string;
    /**
     * The exact result count for this source.
     */
    resultCountExact?: string;
    /**
     * Defines sources for the suggest/search APIs.
     */
    source?: Source;
}
