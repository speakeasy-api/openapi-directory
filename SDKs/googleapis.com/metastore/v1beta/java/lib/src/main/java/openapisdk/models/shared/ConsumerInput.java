package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConsumerInput
 * Contains information of the customer's network configurations.
**/
public class ConsumerInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subnetwork")
    public String subnetwork;
    public ConsumerInput withSubnetwork(String subnetwork) {
        this.subnetwork = subnetwork;
        return this;
    }
}