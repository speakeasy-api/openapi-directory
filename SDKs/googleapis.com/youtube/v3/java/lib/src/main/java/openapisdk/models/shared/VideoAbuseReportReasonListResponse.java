package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VideoAbuseReportReasonListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public VideoAbuseReportReasonListResponse withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventId")
    public String eventId;
    public VideoAbuseReportReasonListResponse withEventId(String eventId) {
        this.eventId = eventId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public VideoAbuseReportReason[] items;
    public VideoAbuseReportReasonListResponse withItems(VideoAbuseReportReason[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public VideoAbuseReportReasonListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visitorId")
    public String visitorId;
    public VideoAbuseReportReasonListResponse withVisitorId(String visitorId) {
        this.visitorId = visitorId;
        return this;
    }
}