package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ClusterConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clustering")
    public ClusterConfigurationClustering clustering;
    public ClusterConfiguration withClustering(ClusterConfigurationClustering clustering) {
        this.clustering = clustering;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("response_type")
    public String responseType;
    public ClusterConfiguration withResponseType(String responseType) {
        this.responseType = responseType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routing")
    public ClusterConfigurationRouting routing;
    public ClusterConfiguration withRouting(ClusterConfigurationRouting routing) {
        this.routing = routing;
        return this;
    }
}