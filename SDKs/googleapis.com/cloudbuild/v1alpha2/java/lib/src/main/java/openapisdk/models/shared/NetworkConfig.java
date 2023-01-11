package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NetworkConfig
 * Network describes the network configuration for a `WorkerPool`.
**/
public class NetworkConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("peeredNetwork")
    public String peeredNetwork;
    public NetworkConfig withPeeredNetwork(String peeredNetwork) {
        this.peeredNetwork = peeredNetwork;
        return this;
    }
}