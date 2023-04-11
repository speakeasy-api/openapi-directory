import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceRestriction } from "./datasourcerestriction";
import { RequestOptions } from "./requestoptions";
/**
 * Request of suggest API.
 */
export declare class SuggestRequest extends SpeakeasyBase {
    /**
     * The sources to use for suggestions. If not specified, the data sources are taken from the current search application. NOTE: Suggestions are only supported for the following sources: * Third-party data sources * PredefinedSource.PERSON * PredefinedSource.GOOGLE_DRIVE
     */
    dataSourceRestrictions?: DataSourceRestriction[];
    /**
     * Partial query for which autocomplete suggestions will be shown. For example, if the query is "sea", then the server might return "season", "search", "seagull" and so on.
     */
    query?: string;
    /**
     * Shared request options for all RPC methods.
     */
    requestOptions?: RequestOptions;
}
