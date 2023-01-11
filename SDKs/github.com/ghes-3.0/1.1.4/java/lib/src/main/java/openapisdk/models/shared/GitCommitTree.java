package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GitCommitTree {
    @JsonProperty("sha")
    public String sha;
    public GitCommitTree withSha(String sha) {
        this.sha = sha;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public GitCommitTree withUrl(String url) {
        this.url = url;
        return this;
    }
}