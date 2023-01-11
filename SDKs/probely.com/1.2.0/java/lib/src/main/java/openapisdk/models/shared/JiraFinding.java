package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class JiraFinding {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issue_id")
    public String issueId;
    public JiraFinding withIssueId(String issueId) {
        this.issueId = issueId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selective_sync")
    public Boolean selectiveSync;
    public JiraFinding withSelectiveSync(Boolean selectiveSync) {
        this.selectiveSync = selectiveSync;
        return this;
    }
}