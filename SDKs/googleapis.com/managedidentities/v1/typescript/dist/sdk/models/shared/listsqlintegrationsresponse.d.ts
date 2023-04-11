import { SpeakeasyBase } from "../../../internal/utils";
import { SqlIntegration } from "./sqlintegration";
/**
 * ListSqlIntegrationsResponse is the response message for ListSqlIntegrations method.
 */
export declare class ListSqlIntegrationsResponse extends SpeakeasyBase {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * A list of SQLIntegrations of a domain.
     */
    sqlIntegrations?: SqlIntegration[];
    /**
     * A list of locations that could not be reached.
     */
    unreachable?: string[];
}
