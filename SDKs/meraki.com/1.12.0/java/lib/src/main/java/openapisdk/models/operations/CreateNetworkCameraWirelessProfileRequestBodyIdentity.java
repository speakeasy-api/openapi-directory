package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateNetworkCameraWirelessProfileRequestBodyIdentity
 * The identity of the wireless profile. Required for creating wireless profiles in 8021x-radius auth mode.
**/
public class CreateNetworkCameraWirelessProfileRequestBodyIdentity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public CreateNetworkCameraWirelessProfileRequestBodyIdentity withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public CreateNetworkCameraWirelessProfileRequestBodyIdentity withUsername(String username) {
        this.username = username;
        return this;
    }
}