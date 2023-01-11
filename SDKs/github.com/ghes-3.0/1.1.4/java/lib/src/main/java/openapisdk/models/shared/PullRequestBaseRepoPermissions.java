package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PullRequestBaseRepoPermissions {
    @JsonProperty("admin")
    public Boolean admin;
    public PullRequestBaseRepoPermissions withAdmin(Boolean admin) {
        this.admin = admin;
        return this;
    }
    @JsonProperty("pull")
    public Boolean pull;
    public PullRequestBaseRepoPermissions withPull(Boolean pull) {
        this.pull = pull;
        return this;
    }
    @JsonProperty("push")
    public Boolean push;
    public PullRequestBaseRepoPermissions withPush(Boolean push) {
        this.push = push;
        return this;
    }
}