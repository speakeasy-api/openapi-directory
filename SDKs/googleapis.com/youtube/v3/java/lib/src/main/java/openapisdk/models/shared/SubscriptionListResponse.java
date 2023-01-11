package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SubscriptionListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public SubscriptionListResponse withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventId")
    public String eventId;
    public SubscriptionListResponse withEventId(String eventId) {
        this.eventId = eventId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public Subscription[] items;
    public SubscriptionListResponse withItems(Subscription[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public SubscriptionListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public SubscriptionListResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageInfo")
    public PageInfo pageInfo;
    public SubscriptionListResponse withPageInfo(PageInfo pageInfo) {
        this.pageInfo = pageInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prevPageToken")
    public String prevPageToken;
    public SubscriptionListResponse withPrevPageToken(String prevPageToken) {
        this.prevPageToken = prevPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tokenPagination")
    public java.util.Map<String, Object> tokenPagination;
    public SubscriptionListResponse withTokenPagination(java.util.Map<String, Object> tokenPagination) {
        this.tokenPagination = tokenPagination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visitorId")
    public String visitorId;
    public SubscriptionListResponse withVisitorId(String visitorId) {
        this.visitorId = visitorId;
        return this;
    }
}