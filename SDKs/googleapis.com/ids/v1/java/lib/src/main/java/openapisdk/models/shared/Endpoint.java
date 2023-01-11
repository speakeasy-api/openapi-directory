package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Endpoint
 * Endpoint describes a single IDS endpoint. It defines a forwarding rule to which packets can be sent for IDS inspection.
**/
public class Endpoint {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Endpoint withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Endpoint withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endpointForwardingRule")
    public String endpointForwardingRule;
    public Endpoint withEndpointForwardingRule(String endpointForwardingRule) {
        this.endpointForwardingRule = endpointForwardingRule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endpointIp")
    public String endpointIp;
    public Endpoint withEndpointIp(String endpointIp) {
        this.endpointIp = endpointIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public Endpoint withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Endpoint withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public String network;
    public Endpoint withNetwork(String network) {
        this.network = network;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("severity")
    public EndpointSeverityEnum severity;
    public Endpoint withSeverity(EndpointSeverityEnum severity) {
        this.severity = severity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public EndpointStateEnum state;
    public Endpoint withState(EndpointStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trafficLogs")
    public Boolean trafficLogs;
    public Endpoint withTrafficLogs(Boolean trafficLogs) {
        this.trafficLogs = trafficLogs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public Endpoint withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}