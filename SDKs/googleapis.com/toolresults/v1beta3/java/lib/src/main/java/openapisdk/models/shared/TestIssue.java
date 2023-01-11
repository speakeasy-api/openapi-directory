package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TestIssue
 * An issue detected occurring during a test execution.
**/
public class TestIssue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public TestIssueCategoryEnum category;
    public TestIssue withCategory(TestIssueCategoryEnum category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorMessage")
    public String errorMessage;
    public TestIssue withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("severity")
    public TestIssueSeverityEnum severity;
    public TestIssue withSeverity(TestIssueSeverityEnum severity) {
        this.severity = severity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stackTrace")
    public StackTrace stackTrace;
    public TestIssue withStackTrace(StackTrace stackTrace) {
        this.stackTrace = stackTrace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public TestIssueTypeEnum type;
    public TestIssue withType(TestIssueTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warning")
    public Any warning;
    public TestIssue withWarning(Any warning) {
        this.warning = warning;
        return this;
    }
}