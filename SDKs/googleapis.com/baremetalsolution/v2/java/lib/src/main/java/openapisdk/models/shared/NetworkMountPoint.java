package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NetworkMountPoint
 * Mount point for a network.
**/
public class NetworkMountPoint {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultGateway")
    public Boolean defaultGateway;
    public NetworkMountPoint withDefaultGateway(Boolean defaultGateway) {
        this.defaultGateway = defaultGateway;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instance")
    public String instance;
    public NetworkMountPoint withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipAddress")
    public String ipAddress;
    public NetworkMountPoint withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logicalInterface")
    public String logicalInterface;
    public NetworkMountPoint withLogicalInterface(String logicalInterface) {
        this.logicalInterface = logicalInterface;
        return this;
    }
}