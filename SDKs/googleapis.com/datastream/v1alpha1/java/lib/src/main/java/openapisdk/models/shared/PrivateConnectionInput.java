package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PrivateConnectionInput
 * The PrivateConnection resource is used to establish private connectivity between Datastream and a customer's network.
**/
public class PrivateConnectionInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public PrivateConnectionInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Error error;
    public PrivateConnectionInput withError(Error error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public PrivateConnectionInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpcPeeringConfig")
    public VpcPeeringConfig vpcPeeringConfig;
    public PrivateConnectionInput withVpcPeeringConfig(VpcPeeringConfig vpcPeeringConfig) {
        this.vpcPeeringConfig = vpcPeeringConfig;
        return this;
    }
}