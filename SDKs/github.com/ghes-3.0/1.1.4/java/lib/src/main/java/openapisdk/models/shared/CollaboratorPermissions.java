package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CollaboratorPermissions {
    @JsonProperty("admin")
    public Boolean admin;
    public CollaboratorPermissions withAdmin(Boolean admin) {
        this.admin = admin;
        return this;
    }
    @JsonProperty("pull")
    public Boolean pull;
    public CollaboratorPermissions withPull(Boolean pull) {
        this.pull = pull;
        return this;
    }
    @JsonProperty("push")
    public Boolean push;
    public CollaboratorPermissions withPush(Boolean push) {
        this.push = push;
        return this;
    }
}