package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LiveStreamConfigurationIssue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public LiveStreamConfigurationIssue withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public LiveStreamConfigurationIssue withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("severity")
    public LiveStreamConfigurationIssueSeverityEnum severity;
    public LiveStreamConfigurationIssue withSeverity(LiveStreamConfigurationIssueSeverityEnum severity) {
        this.severity = severity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public LiveStreamConfigurationIssueTypeEnum type;
    public LiveStreamConfigurationIssue withType(LiveStreamConfigurationIssueTypeEnum type) {
        this.type = type;
        return this;
    }
}