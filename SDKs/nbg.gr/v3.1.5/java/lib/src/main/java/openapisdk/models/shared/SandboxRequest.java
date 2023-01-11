package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SandboxRequest
 * Request to create a new sandbox
**/
public class SandboxRequest {
    @JsonProperty("sandboxId")
    public String sandboxId;
    public SandboxRequest withSandboxId(String sandboxId) {
        this.sandboxId = sandboxId;
        return this;
    }
}