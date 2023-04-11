import { SpeakeasyBase } from "../../../internal/utils";
import { PrivateConnection } from "./privateconnection";
/**
 * Response message for 'ListPrivateConnections' request.
 */
export declare class ListPrivateConnectionsResponse extends SpeakeasyBase {
    /**
     * A token which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * List of private connections.
     */
    privateConnections?: PrivateConnection[];
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
