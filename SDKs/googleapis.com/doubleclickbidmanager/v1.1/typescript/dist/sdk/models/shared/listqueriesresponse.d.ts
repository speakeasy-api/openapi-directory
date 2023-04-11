import { SpeakeasyBase } from "../../../internal/utils";
import { Query } from "./query";
/**
 * List queries response.
 */
export declare class ListQueriesResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "doubleclickbidmanager#listQueriesResponse".
     */
    kind?: string;
    /**
     * Next page's pagination token if one exists.
     */
    nextPageToken?: string;
    /**
     * Retrieved queries.
     */
    queries?: Query[];
}
