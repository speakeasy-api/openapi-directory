package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Network
 * Network describes the GCP network used to create workers in.
**/
public class Network {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public String network;
    public Network withNetwork(String network) {
        this.network = network;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectId")
    public String projectId;
    public Network withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subnetwork")
    public String subnetwork;
    public Network withSubnetwork(String subnetwork) {
        this.subnetwork = subnetwork;
        return this;
    }
}