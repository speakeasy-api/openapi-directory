package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LogicalNetworkInterface
 * Each logical network interface is effectively a network and IP pair.
**/
public class LogicalNetworkInterface {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultGateway")
    public Boolean defaultGateway;
    public LogicalNetworkInterface withDefaultGateway(Boolean defaultGateway) {
        this.defaultGateway = defaultGateway;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public LogicalNetworkInterface withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipAddress")
    public String ipAddress;
    public LogicalNetworkInterface withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public String network;
    public LogicalNetworkInterface withNetwork(String network) {
        this.network = network;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkType")
    public LogicalNetworkInterfaceNetworkTypeEnum networkType;
    public LogicalNetworkInterface withNetworkType(LogicalNetworkInterfaceNetworkTypeEnum networkType) {
        this.networkType = networkType;
        return this;
    }
}