package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MembershipsLevelListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public MembershipsLevelListResponse withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventId")
    public String eventId;
    public MembershipsLevelListResponse withEventId(String eventId) {
        this.eventId = eventId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public MembershipsLevel[] items;
    public MembershipsLevelListResponse withItems(MembershipsLevel[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public MembershipsLevelListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visitorId")
    public String visitorId;
    public MembershipsLevelListResponse withVisitorId(String visitorId) {
        this.visitorId = visitorId;
        return this;
    }
}