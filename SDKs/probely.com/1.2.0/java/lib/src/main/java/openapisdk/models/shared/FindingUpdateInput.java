package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FindingUpdateInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignee")
    public Assignee assignee;
    public FindingUpdateInput withAssignee(Assignee assignee) {
        this.assignee = assignee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;
    public FindingUpdateInput withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public String[] labels;
    public FindingUpdateInput withLabels(String[] labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("severity")
    public FindingSeverityEnum severity;
    public FindingUpdateInput withSeverity(FindingSeverityEnum severity) {
        this.severity = severity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public FindingStateEnum state;
    public FindingUpdateInput withState(FindingStateEnum state) {
        this.state = state;
        return this;
    }
}