package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LiveStreamListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public LiveStreamListResponse withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventId")
    public String eventId;
    public LiveStreamListResponse withEventId(String eventId) {
        this.eventId = eventId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public LiveStream[] items;
    public LiveStreamListResponse withItems(LiveStream[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public LiveStreamListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public LiveStreamListResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageInfo")
    public PageInfo pageInfo;
    public LiveStreamListResponse withPageInfo(PageInfo pageInfo) {
        this.pageInfo = pageInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prevPageToken")
    public String prevPageToken;
    public LiveStreamListResponse withPrevPageToken(String prevPageToken) {
        this.prevPageToken = prevPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tokenPagination")
    public java.util.Map<String, Object> tokenPagination;
    public LiveStreamListResponse withTokenPagination(java.util.Map<String, Object> tokenPagination) {
        this.tokenPagination = tokenPagination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visitorId")
    public String visitorId;
    public LiveStreamListResponse withVisitorId(String visitorId) {
        this.visitorId = visitorId;
        return this;
    }
}