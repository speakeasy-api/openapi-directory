package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NetworkInterface
 * A Compute Engine NetworkInterface resource. Identical to the NetworkInterface on the corresponding Compute Engine resource.
**/
public class NetworkInterface {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessConfigs")
    public AccessConfig[] accessConfigs;
    public NetworkInterface withAccessConfigs(AccessConfig[] accessConfigs) {
        this.accessConfigs = accessConfigs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public String network;
    public NetworkInterface withNetwork(String network) {
        this.network = network;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkIp")
    public String networkIp;
    public NetworkInterface withNetworkIp(String networkIp) {
        this.networkIp = networkIp;
        return this;
    }
}