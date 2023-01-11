package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TeamRepositoryRepositoryPermissions {
    @JsonProperty("admin")
    public Boolean admin;
    public TeamRepositoryRepositoryPermissions withAdmin(Boolean admin) {
        this.admin = admin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maintain")
    public Boolean maintain;
    public TeamRepositoryRepositoryPermissions withMaintain(Boolean maintain) {
        this.maintain = maintain;
        return this;
    }
    @JsonProperty("pull")
    public Boolean pull;
    public TeamRepositoryRepositoryPermissions withPull(Boolean pull) {
        this.pull = pull;
        return this;
    }
    @JsonProperty("push")
    public Boolean push;
    public TeamRepositoryRepositoryPermissions withPush(Boolean push) {
        this.push = push;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("triage")
    public Boolean triage;
    public TeamRepositoryRepositoryPermissions withTriage(Boolean triage) {
        this.triage = triage;
        return this;
    }
}