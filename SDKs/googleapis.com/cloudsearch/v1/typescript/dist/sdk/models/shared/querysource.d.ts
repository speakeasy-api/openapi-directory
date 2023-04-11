import { SpeakeasyBase } from "../../../internal/utils";
import { QueryOperator } from "./queryoperator";
import { Source } from "./source";
/**
 * List of sources that the user can search using the query API.
 */
export declare class QuerySource extends SpeakeasyBase {
    /**
     * Display name of the data source.
     */
    displayName?: string;
    /**
     * List of all operators applicable for this source.
     */
    operators?: QueryOperator[];
    /**
     * A short name or alias for the source. This value can be used with the 'source' operator.
     */
    shortName?: string;
    /**
     * Defines sources for the suggest/search APIs.
     */
    source?: Source;
}
