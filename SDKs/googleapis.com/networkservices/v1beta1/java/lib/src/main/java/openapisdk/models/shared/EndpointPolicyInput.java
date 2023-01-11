package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EndpointPolicyInput
 * EndpointPolicy is a resource that helps apply desired configuration on the endpoints that match specific criteria. For example, this resource can be used to apply "authentication config" an all endpoints that serve on port 8080.
**/
public class EndpointPolicyInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizationPolicy")
    public String authorizationPolicy;
    public EndpointPolicyInput withAuthorizationPolicy(String authorizationPolicy) {
        this.authorizationPolicy = authorizationPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientTlsPolicy")
    public String clientTlsPolicy;
    public EndpointPolicyInput withClientTlsPolicy(String clientTlsPolicy) {
        this.clientTlsPolicy = clientTlsPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public EndpointPolicyInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endpointMatcher")
    public EndpointMatcher endpointMatcher;
    public EndpointPolicyInput withEndpointMatcher(EndpointMatcher endpointMatcher) {
        this.endpointMatcher = endpointMatcher;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public EndpointPolicyInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public EndpointPolicyInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serverTlsPolicy")
    public String serverTlsPolicy;
    public EndpointPolicyInput withServerTlsPolicy(String serverTlsPolicy) {
        this.serverTlsPolicy = serverTlsPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trafficPortSelector")
    public TrafficPortSelector trafficPortSelector;
    public EndpointPolicyInput withTrafficPortSelector(TrafficPortSelector trafficPortSelector) {
        this.trafficPortSelector = trafficPortSelector;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public EndpointPolicyTypeEnum type;
    public EndpointPolicyInput withType(EndpointPolicyTypeEnum type) {
        this.type = type;
        return this;
    }
}