package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DebugInstanceRequest
 * Request message for Instances.DebugInstance.
**/
public class DebugInstanceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sshKey")
    public String sshKey;
    public DebugInstanceRequest withSshKey(String sshKey) {
        this.sshKey = sshKey;
        return this;
    }
}