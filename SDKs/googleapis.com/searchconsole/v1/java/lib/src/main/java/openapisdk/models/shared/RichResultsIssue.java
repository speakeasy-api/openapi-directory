package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RichResultsIssue
 * Severity and status of a single issue affecting a single rich result instance on a page.
**/
public class RichResultsIssue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issueMessage")
    public String issueMessage;
    public RichResultsIssue withIssueMessage(String issueMessage) {
        this.issueMessage = issueMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("severity")
    public RichResultsIssueSeverityEnum severity;
    public RichResultsIssue withSeverity(RichResultsIssueSeverityEnum severity) {
        this.severity = severity;
        return this;
    }
}