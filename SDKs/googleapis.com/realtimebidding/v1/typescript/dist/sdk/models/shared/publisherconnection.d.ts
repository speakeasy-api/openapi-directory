import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Whether the publisher has been approved by the bidder.
 */
export declare enum PublisherConnectionBiddingStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    Rejected = "REJECTED",
    Approved = "APPROVED"
}
/**
 * Output only. Whether the publisher is an Ad Manager or AdMob publisher.
 */
export declare enum PublisherConnectionPublisherPlatformEnum {
    PublisherPlatformUnspecified = "PUBLISHER_PLATFORM_UNSPECIFIED",
    GoogleAdManager = "GOOGLE_AD_MANAGER",
    Admob = "ADMOB"
}
/**
 * An Open Bidding exchange's connection to a publisher. This is initiated by the publisher for the bidder to review. If approved by the bidder, this means that the bidder agrees to receive bid requests from the publisher.
 */
export declare class PublisherConnection extends SpeakeasyBase {
    /**
     * Whether the publisher has been approved by the bidder.
     */
    biddingState?: PublisherConnectionBiddingStateEnum;
    /**
     * Output only. The time at which the publisher initiated a connection with the bidder (irrespective of if or when the bidder approves it). This is subsequently updated if the publisher revokes and re-initiates the connection.
     */
    createTime?: string;
    /**
     * Output only. Publisher display name.
     */
    displayName?: string;
    /**
     * Output only. Name of the publisher connection. This follows the pattern `bidders/{bidder}/publisherConnections/{publisher}`, where `{bidder}` represents the account ID of the bidder, and `{publisher}` is the ads.txt/app-ads.txt publisher ID.
     */
    name?: string;
    /**
     * Output only. Whether the publisher is an Ad Manager or AdMob publisher.
     */
    publisherPlatform?: PublisherConnectionPublisherPlatformEnum;
}
