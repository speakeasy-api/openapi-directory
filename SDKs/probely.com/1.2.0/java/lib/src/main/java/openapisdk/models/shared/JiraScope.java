package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class JiraScope {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_jira")
    public Boolean allowJira;
    public JiraScope withAllowJira(Boolean allowJira) {
        this.allowJira = allowJira;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_sync")
    public Boolean autoSync;
    public JiraScope withAutoSync(Boolean autoSync) {
        this.autoSync = autoSync;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issue_type_id")
    public String issueTypeId;
    public JiraScope withIssueTypeId(String issueTypeId) {
        this.issueTypeId = issueTypeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priority_mapping")
    public JiraPriorityMapping priorityMapping;
    public JiraScope withPriorityMapping(JiraPriorityMapping priorityMapping) {
        this.priorityMapping = priorityMapping;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("project_id")
    public String projectId;
    public JiraScope withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status_mapping")
    public JiraStatusMapping statusMapping;
    public JiraScope withStatusMapping(JiraStatusMapping statusMapping) {
        this.statusMapping = statusMapping;
        return this;
    }
}