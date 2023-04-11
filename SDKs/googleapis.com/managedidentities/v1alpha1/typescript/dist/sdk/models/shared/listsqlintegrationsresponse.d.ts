import { SpeakeasyBase } from "../../../internal/utils";
import { SQLIntegration } from "./sqlintegration";
/**
 * ListSQLIntegrationsResponse is the response message for ListSQLIntegrations method.
 */
export declare class ListSQLIntegrationsResponse extends SpeakeasyBase {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * A list of SQLIntegrations of a domain.
     */
    sqlIntegrations?: SQLIntegration[];
    /**
     * A list of locations that could not be reached.
     */
    unreachable?: string[];
}
