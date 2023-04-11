import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A request to reject a batch of publisher connections.
 */
export declare class BatchRejectPublisherConnectionsRequest extends SpeakeasyBase {
    /**
     * Required. The names of the publishers with whom connection will be rejected. In the pattern `bidders/{bidder}/publisherConnections/{publisher}` where `{bidder}` is the account ID of the bidder, and `{publisher}` is the ads.txt/app-ads.txt publisher ID.
     */
    names?: string[];
}
