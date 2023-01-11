package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PrivateConnectivity
 * Private Connectivity
**/
public class PrivateConnectivity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateConnectionName")
    public String privateConnectionName;
    public PrivateConnectivity withPrivateConnectionName(String privateConnectionName) {
        this.privateConnectionName = privateConnectionName;
        return this;
    }
}