package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AmpIssue
 * AMP issue.
**/
public class AmpIssue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issueMessage")
    public String issueMessage;
    public AmpIssue withIssueMessage(String issueMessage) {
        this.issueMessage = issueMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("severity")
    public AmpIssueSeverityEnum severity;
    public AmpIssue withSeverity(AmpIssueSeverityEnum severity) {
        this.severity = severity;
        return this;
    }
}