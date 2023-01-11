package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class WorkflowRunSimpleCommitCommitter {
    @JsonProperty("email")
    public String email;
    public WorkflowRunSimpleCommitCommitter withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public WorkflowRunSimpleCommitCommitter withName(String name) {
        this.name = name;
        return this;
    }
}