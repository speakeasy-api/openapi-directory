package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GitCreateTreeRequestBodyTree {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public String content;
    public GitCreateTreeRequestBodyTree withContent(String content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mode")
    public GitCreateTreeRequestBodyTreeModeEnum mode;
    public GitCreateTreeRequestBodyTree withMode(GitCreateTreeRequestBodyTreeModeEnum mode) {
        this.mode = mode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public GitCreateTreeRequestBodyTree withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sha")
    public String sha;
    public GitCreateTreeRequestBodyTree withSha(String sha) {
        this.sha = sha;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GitCreateTreeRequestBodyTreeTypeEnum type;
    public GitCreateTreeRequestBodyTree withType(GitCreateTreeRequestBodyTreeTypeEnum type) {
        this.type = type;
        return this;
    }
}