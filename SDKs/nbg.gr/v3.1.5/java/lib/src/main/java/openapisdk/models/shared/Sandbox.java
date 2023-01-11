package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Sandbox
 * Sandbox model
**/
public class Sandbox {
    @JsonProperty("sandboxId")
    public String sandboxId;
    public Sandbox withSandboxId(String sandboxId) {
        this.sandboxId = sandboxId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("users")
    public SandboxUser[] users;
    public Sandbox withUsers(SandboxUser[] users) {
        this.users = users;
        return this;
    }
}