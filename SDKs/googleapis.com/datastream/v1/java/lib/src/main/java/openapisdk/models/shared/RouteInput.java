package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RouteInput
 * The route resource is the child of the private connection resource, used for defining a route for a private connection.
**/
public class RouteInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationAddress")
    public String destinationAddress;
    public RouteInput withDestinationAddress(String destinationAddress) {
        this.destinationAddress = destinationAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationPort")
    public Integer destinationPort;
    public RouteInput withDestinationPort(Integer destinationPort) {
        this.destinationPort = destinationPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public RouteInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public RouteInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
}