import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A request to approve a batch of publisher connections.
 */
export declare class BatchApprovePublisherConnectionsRequest extends SpeakeasyBase {
    /**
     * Required. The names of the publishers with which connections will be approved. In the pattern `bidders/{bidder}/publisherConnections/{publisher}` where `{bidder}` is the account ID of the bidder, and `{publisher}` is the ads.txt/app-ads.txt publisher ID.
     */
    names?: string[];
}
