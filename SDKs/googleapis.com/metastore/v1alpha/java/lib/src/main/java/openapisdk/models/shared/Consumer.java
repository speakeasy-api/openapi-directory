package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Consumer
 * Contains information of the customer's network configurations.
**/
public class Consumer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endpointUri")
    public String endpointUri;
    public Consumer withEndpointUri(String endpointUri) {
        this.endpointUri = endpointUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subnetwork")
    public String subnetwork;
    public Consumer withSubnetwork(String subnetwork) {
        this.subnetwork = subnetwork;
        return this;
    }
}