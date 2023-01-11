package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NetworkUnblockResponseOk
 * Success
**/
public class NetworkUnblockResponseOk {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public String network;
    public NetworkUnblockResponseOk withNetwork(String network) {
        this.network = network;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unblocked_until")
    public String unblockedUntil;
    public NetworkUnblockResponseOk withUnblockedUntil(String unblockedUntil) {
        this.unblockedUntil = unblockedUntil;
        return this;
    }
}