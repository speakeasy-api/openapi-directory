package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class FullRepositoryPermissions {
    @JsonProperty("admin")
    public Boolean admin;
    public FullRepositoryPermissions withAdmin(Boolean admin) {
        this.admin = admin;
        return this;
    }
    @JsonProperty("pull")
    public Boolean pull;
    public FullRepositoryPermissions withPull(Boolean pull) {
        this.pull = pull;
        return this;
    }
    @JsonProperty("push")
    public Boolean push;
    public FullRepositoryPermissions withPush(Boolean push) {
        this.push = push;
        return this;
    }
}