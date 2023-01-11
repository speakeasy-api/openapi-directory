package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LiveBroadcast
 * A *liveBroadcast* resource represents an event that will be streamed, via live video, on YouTube.
**/
public class LiveBroadcast {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentDetails")
    public LiveBroadcastContentDetails contentDetails;
    public LiveBroadcast withContentDetails(LiveBroadcastContentDetails contentDetails) {
        this.contentDetails = contentDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public LiveBroadcast withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public LiveBroadcast withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public LiveBroadcast withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snippet")
    public LiveBroadcastSnippet snippet;
    public LiveBroadcast withSnippet(LiveBroadcastSnippet snippet) {
        this.snippet = snippet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statistics")
    public LiveBroadcastStatistics statistics;
    public LiveBroadcast withStatistics(LiveBroadcastStatistics statistics) {
        this.statistics = statistics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public LiveBroadcastStatus status;
    public LiveBroadcast withStatus(LiveBroadcastStatus status) {
        this.status = status;
        return this;
    }
}