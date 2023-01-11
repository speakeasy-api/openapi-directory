package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EndpointInput
 * Endpoint describes a single IDS endpoint. It defines a forwarding rule to which packets can be sent for IDS inspection.
**/
public class EndpointInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public EndpointInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public EndpointInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public String network;
    public EndpointInput withNetwork(String network) {
        this.network = network;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("severity")
    public EndpointSeverityEnum severity;
    public EndpointInput withSeverity(EndpointSeverityEnum severity) {
        this.severity = severity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trafficLogs")
    public Boolean trafficLogs;
    public EndpointInput withTrafficLogs(Boolean trafficLogs) {
        this.trafficLogs = trafficLogs;
        return this;
    }
}