package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MobileUsabilityIssue
 * Mobile-usability issue.
**/
public class MobileUsabilityIssue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issueType")
    public MobileUsabilityIssueIssueTypeEnum issueType;
    public MobileUsabilityIssue withIssueType(MobileUsabilityIssueIssueTypeEnum issueType) {
        this.issueType = issueType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public MobileUsabilityIssue withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("severity")
    public MobileUsabilityIssueSeverityEnum severity;
    public MobileUsabilityIssue withSeverity(MobileUsabilityIssueSeverityEnum severity) {
        this.severity = severity;
        return this;
    }
}