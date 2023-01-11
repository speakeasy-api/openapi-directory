package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VpcPeeringConfig
 * The VPC Peering configuration is used to create VPC peering between Datastream and the consumer's VPC.
**/
public class VpcPeeringConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subnet")
    public String subnet;
    public VpcPeeringConfig withSubnet(String subnet) {
        this.subnet = subnet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpcName")
    public String vpcName;
    public VpcPeeringConfig withVpcName(String vpcName) {
        this.vpcName = vpcName;
        return this;
    }
}