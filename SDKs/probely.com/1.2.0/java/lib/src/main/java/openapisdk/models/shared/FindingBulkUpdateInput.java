package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FindingBulkUpdateInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignee")
    public Assignee assignee;
    public FindingBulkUpdateInput withAssignee(Assignee assignee) {
        this.assignee = assignee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;
    public FindingBulkUpdateInput withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonProperty("ids")
    public String[] ids;
    public FindingBulkUpdateInput withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public String[] labels;
    public FindingBulkUpdateInput withLabels(String[] labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("severity")
    public FindingSeverityEnum severity;
    public FindingBulkUpdateInput withSeverity(FindingSeverityEnum severity) {
        this.severity = severity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public FindingStateEnum state;
    public FindingBulkUpdateInput withState(FindingStateEnum state) {
        this.state = state;
        return this;
    }
}