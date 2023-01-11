package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PublisherConnection
 * An Open Bidding exchange's connection to a publisher. This is initiated by the publisher for the bidder to review. If approved by the bidder, this means that the bidder agrees to receive bid requests from the publisher.
**/
public class PublisherConnection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("biddingState")
    public PublisherConnectionBiddingStateEnum biddingState;
    public PublisherConnection withBiddingState(PublisherConnectionBiddingStateEnum biddingState) {
        this.biddingState = biddingState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public PublisherConnection withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public PublisherConnection withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PublisherConnection withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisherPlatform")
    public PublisherConnectionPublisherPlatformEnum publisherPlatform;
    public PublisherConnection withPublisherPlatform(PublisherConnectionPublisherPlatformEnum publisherPlatform) {
        this.publisherPlatform = publisherPlatform;
        return this;
    }
}