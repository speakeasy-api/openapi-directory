package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class WorkflowRunSimpleCommitAuthor {
    @JsonProperty("email")
    public String email;
    public WorkflowRunSimpleCommitAuthor withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public WorkflowRunSimpleCommitAuthor withName(String name) {
        this.name = name;
        return this;
    }
}