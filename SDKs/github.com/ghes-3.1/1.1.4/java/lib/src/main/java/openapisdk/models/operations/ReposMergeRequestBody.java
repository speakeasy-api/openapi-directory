package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReposMergeRequestBody {
    @JsonProperty("base")
    public String base;
    public ReposMergeRequestBody withBase(String base) {
        this.base = base;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commit_message")
    public String commitMessage;
    public ReposMergeRequestBody withCommitMessage(String commitMessage) {
        this.commitMessage = commitMessage;
        return this;
    }
    @JsonProperty("head")
    public String head;
    public ReposMergeRequestBody withHead(String head) {
        this.head = head;
        return this;
    }
}