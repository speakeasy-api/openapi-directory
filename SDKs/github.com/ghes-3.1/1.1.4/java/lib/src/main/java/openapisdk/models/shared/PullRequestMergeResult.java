package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PullRequestMergeResult
 * Pull Request Merge Result
**/
public class PullRequestMergeResult {
    @JsonProperty("merged")
    public Boolean merged;
    public PullRequestMergeResult withMerged(Boolean merged) {
        this.merged = merged;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PullRequestMergeResult withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("sha")
    public String sha;
    public PullRequestMergeResult withSha(String sha) {
        this.sha = sha;
        return this;
    }
}