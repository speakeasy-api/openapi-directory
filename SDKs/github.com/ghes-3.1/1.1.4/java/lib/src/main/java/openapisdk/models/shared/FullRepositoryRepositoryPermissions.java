package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FullRepositoryRepositoryPermissions {
    @JsonProperty("admin")
    public Boolean admin;
    public FullRepositoryRepositoryPermissions withAdmin(Boolean admin) {
        this.admin = admin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maintain")
    public Boolean maintain;
    public FullRepositoryRepositoryPermissions withMaintain(Boolean maintain) {
        this.maintain = maintain;
        return this;
    }
    @JsonProperty("pull")
    public Boolean pull;
    public FullRepositoryRepositoryPermissions withPull(Boolean pull) {
        this.pull = pull;
        return this;
    }
    @JsonProperty("push")
    public Boolean push;
    public FullRepositoryRepositoryPermissions withPush(Boolean push) {
        this.push = push;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("triage")
    public Boolean triage;
    public FullRepositoryRepositoryPermissions withTriage(Boolean triage) {
        this.triage = triage;
        return this;
    }
}