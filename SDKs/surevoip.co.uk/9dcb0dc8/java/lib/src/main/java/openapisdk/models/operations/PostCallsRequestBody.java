package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostCallsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("announcement_at")
    public String announcementAt;
    public PostCallsRequestBody withAnnouncementAt(String announcementAt) {
        this.announcementAt = announcementAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("announcement_id")
    public String announcementId;
    public PostCallsRequestBody withAnnouncementId(String announcementId) {
        this.announcementId = announcementId;
        return this;
    }
    @JsonProperty("caller_id")
    public String callerId;
    public PostCallsRequestBody withCallerId(String callerId) {
        this.callerId = callerId;
        return this;
    }
    @JsonProperty("from")
    public String from;
    public PostCallsRequestBody withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hangup_announcement_id")
    public String hangupAnnouncementId;
    public PostCallsRequestBody withHangupAnnouncementId(String hangupAnnouncementId) {
        this.hangupAnnouncementId = hangupAnnouncementId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hangup_at")
    public String hangupAt;
    public PostCallsRequestBody withHangupAt(String hangupAt) {
        this.hangupAt = hangupAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public PostCallsRequestBodyOptions options;
    public PostCallsRequestBody withOptions(PostCallsRequestBodyOptions options) {
        this.options = options;
        return this;
    }
    @JsonProperty("to")
    public String to;
    public PostCallsRequestBody withTo(String to) {
        this.to = to;
        return this;
    }
}