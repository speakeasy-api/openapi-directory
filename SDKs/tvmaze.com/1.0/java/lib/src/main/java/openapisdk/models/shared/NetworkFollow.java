package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NetworkFollow {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_embedded")
    public NetworkFollowEmbedded embedded;
    public NetworkFollow withEmbedded(NetworkFollowEmbedded embedded) {
        this.embedded = embedded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network_id")
    public Long networkId;
    public NetworkFollow withNetworkId(Long networkId) {
        this.networkId = networkId;
        return this;
    }
}