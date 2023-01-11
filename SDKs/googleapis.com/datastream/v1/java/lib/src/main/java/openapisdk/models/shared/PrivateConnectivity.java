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
    @JsonProperty("privateConnection")
    public String privateConnection;
    public PrivateConnectivity withPrivateConnection(String privateConnection) {
        this.privateConnection = privateConnection;
        return this;
    }
}