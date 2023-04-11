import { SpeakeasyBase } from "../../../internal/utils";
import { PublisherConnection } from "./publisherconnection";
/**
 * A response for the request to reject a batch of publisher connections.
 */
export declare class BatchRejectPublisherConnectionsResponse extends SpeakeasyBase {
    /**
     * The publisher connections that have been rejected.
     */
    publisherConnections?: PublisherConnection[];
}
