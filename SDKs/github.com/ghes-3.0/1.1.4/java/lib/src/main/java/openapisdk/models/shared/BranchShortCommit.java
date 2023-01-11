package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BranchShortCommit {
    @JsonProperty("sha")
    public String sha;
    public BranchShortCommit withSha(String sha) {
        this.sha = sha;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public BranchShortCommit withUrl(String url) {
        this.url = url;
        return this;
    }
}