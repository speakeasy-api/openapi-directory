package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkCameraWirelessProfileRequestBodyIdentity
 * The identity of the wireless profile. Required for creating wireless profiles in 8021x-radius auth mode.
**/
public class UpdateNetworkCameraWirelessProfileRequestBodyIdentity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public UpdateNetworkCameraWirelessProfileRequestBodyIdentity withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public UpdateNetworkCameraWirelessProfileRequestBodyIdentity withUsername(String username) {
        this.username = username;
        return this;
    }
}