package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Network
 * VM networking options.
**/
public class Network {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Network withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subnetwork")
    public String subnetwork;
    public Network withSubnetwork(String subnetwork) {
        this.subnetwork = subnetwork;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usePrivateAddress")
    public Boolean usePrivateAddress;
    public Network withUsePrivateAddress(Boolean usePrivateAddress) {
        this.usePrivateAddress = usePrivateAddress;
        return this;
    }
}