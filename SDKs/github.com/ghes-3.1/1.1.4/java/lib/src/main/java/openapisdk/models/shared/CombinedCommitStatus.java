package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CombinedCommitStatus
 * Combined Commit Status
**/
public class CombinedCommitStatus {
    @JsonProperty("commit_url")
    public String commitUrl;
    public CombinedCommitStatus withCommitUrl(String commitUrl) {
        this.commitUrl = commitUrl;
        return this;
    }
    @JsonProperty("repository")
    public MinimalRepository repository;
    public CombinedCommitStatus withRepository(MinimalRepository repository) {
        this.repository = repository;
        return this;
    }
    @JsonProperty("sha")
    public String sha;
    public CombinedCommitStatus withSha(String sha) {
        this.sha = sha;
        return this;
    }
    @JsonProperty("state")
    public String state;
    public CombinedCommitStatus withState(String state) {
        this.state = state;
        return this;
    }
    @JsonProperty("statuses")
    public SimpleCommitStatus[] statuses;
    public CombinedCommitStatus withStatuses(SimpleCommitStatus[] statuses) {
        this.statuses = statuses;
        return this;
    }
    @JsonProperty("total_count")
    public Long totalCount;
    public CombinedCommitStatus withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public CombinedCommitStatus withUrl(String url) {
        this.url = url;
        return this;
    }
}