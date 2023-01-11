package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PullRequestSimpleHead {
    @JsonProperty("label")
    public String label;
    public PullRequestSimpleHead withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("ref")
    public String ref;
    public PullRequestSimpleHead withRef(String ref) {
        this.ref = ref;
        return this;
    }
    @JsonProperty("repo")
    public Repository repo;
    public PullRequestSimpleHead withRepo(Repository repo) {
        this.repo = repo;
        return this;
    }
    @JsonProperty("sha")
    public String sha;
    public PullRequestSimpleHead withSha(String sha) {
        this.sha = sha;
        return this;
    }
    @JsonProperty("user")
    public PullRequestSimpleHeadSimpleUser user;
    public PullRequestSimpleHead withUser(PullRequestSimpleHeadSimpleUser user) {
        this.user = user;
        return this;
    }
}