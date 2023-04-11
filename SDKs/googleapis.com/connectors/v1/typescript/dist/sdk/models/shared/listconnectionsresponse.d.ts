import { SpeakeasyBase } from "../../../internal/utils";
import { Connection } from "./connection";
/**
 * Response message for ConnectorsService.ListConnections
 */
export declare class ListConnectionsResponse extends SpeakeasyBase {
    /**
     * Connections.
     */
    connections?: Connection[];
    /**
     * Next page token.
     */
    nextPageToken?: string;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
