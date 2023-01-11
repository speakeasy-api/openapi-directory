package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ShortBranchCommit {
    @JsonProperty("sha")
    public String sha;
    public ShortBranchCommit withSha(String sha) {
        this.sha = sha;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public ShortBranchCommit withUrl(String url) {
        this.url = url;
        return this;
    }
}