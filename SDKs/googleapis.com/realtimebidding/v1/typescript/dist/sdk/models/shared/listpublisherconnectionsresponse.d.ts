import { SpeakeasyBase } from "../../../internal/utils";
import { PublisherConnection } from "./publisherconnection";
/**
 * A response to a request for listing publisher connections.
 */
export declare class ListPublisherConnectionsResponse extends SpeakeasyBase {
    /**
     * A token to retrieve the next page of results. Pass this value in the ListPublisherConnectionsRequest.pageToken field in the subsequent call to the `ListPublisherConnections` method to retrieve the next page of results.
     */
    nextPageToken?: string;
    /**
     * The list of publisher connections.
     */
    publisherConnections?: PublisherConnection[];
}
