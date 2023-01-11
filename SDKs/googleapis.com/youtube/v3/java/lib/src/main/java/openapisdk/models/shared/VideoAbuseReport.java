package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VideoAbuseReport {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public String comments;
    public VideoAbuseReport withComments(String comments) {
        this.comments = comments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public VideoAbuseReport withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reasonId")
    public String reasonId;
    public VideoAbuseReport withReasonId(String reasonId) {
        this.reasonId = reasonId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondaryReasonId")
    public String secondaryReasonId;
    public VideoAbuseReport withSecondaryReasonId(String secondaryReasonId) {
        this.secondaryReasonId = secondaryReasonId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoId")
    public String videoId;
    public VideoAbuseReport withVideoId(String videoId) {
        this.videoId = videoId;
        return this;
    }
}