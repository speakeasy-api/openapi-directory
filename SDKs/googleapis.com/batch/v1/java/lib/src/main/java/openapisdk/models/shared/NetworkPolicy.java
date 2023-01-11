package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NetworkPolicy
 * NetworkPolicy describes VM instance network configurations.
**/
public class NetworkPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkInterfaces")
    public NetworkInterface[] networkInterfaces;
    public NetworkPolicy withNetworkInterfaces(NetworkInterface[] networkInterfaces) {
        this.networkInterfaces = networkInterfaces;
        return this;
    }
}