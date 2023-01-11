package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NetworkUnblock {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public String network;
    public NetworkUnblock withNetwork(String network) {
        this.network = network;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unblock_duration")
    public Long unblockDuration;
    public NetworkUnblock withUnblockDuration(Long unblockDuration) {
        this.unblockDuration = unblockDuration;
        return this;
    }
}