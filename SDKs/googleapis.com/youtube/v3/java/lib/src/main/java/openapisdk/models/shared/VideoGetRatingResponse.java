package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VideoGetRatingResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public VideoGetRatingResponse withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventId")
    public String eventId;
    public VideoGetRatingResponse withEventId(String eventId) {
        this.eventId = eventId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public VideoRating[] items;
    public VideoGetRatingResponse withItems(VideoRating[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public VideoGetRatingResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visitorId")
    public String visitorId;
    public VideoGetRatingResponse withVisitorId(String visitorId) {
        this.visitorId = visitorId;
        return this;
    }
}