package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudBaremetalsolutionV2LogicalInterface
 * Each logical interface represents a logical abstraction of the underlying physical interface (for eg. bond, nic) of the instance. Each logical interface can effectively map to multiple network-IP pairs and still be mapped to one underlying physical interface.
**/
public class GoogleCloudBaremetalsolutionV2LogicalInterface {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interfaceIndex")
    public Integer interfaceIndex;
    public GoogleCloudBaremetalsolutionV2LogicalInterface withInterfaceIndex(Integer interfaceIndex) {
        this.interfaceIndex = interfaceIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logicalNetworkInterfaces")
    public LogicalNetworkInterface[] logicalNetworkInterfaces;
    public GoogleCloudBaremetalsolutionV2LogicalInterface withLogicalNetworkInterfaces(LogicalNetworkInterface[] logicalNetworkInterfaces) {
        this.logicalNetworkInterfaces = logicalNetworkInterfaces;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudBaremetalsolutionV2LogicalInterface withName(String name) {
        this.name = name;
        return this;
    }
}