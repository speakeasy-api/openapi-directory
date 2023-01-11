package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EndpointPolicy
 * EndpointPolicy is a resource that helps apply desired configuration on the endpoints that match specific criteria. For example, this resource can be used to apply "authentication config" an all endpoints that serve on port 8080.
**/
public class EndpointPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizationPolicy")
    public String authorizationPolicy;
    public EndpointPolicy withAuthorizationPolicy(String authorizationPolicy) {
        this.authorizationPolicy = authorizationPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientTlsPolicy")
    public String clientTlsPolicy;
    public EndpointPolicy withClientTlsPolicy(String clientTlsPolicy) {
        this.clientTlsPolicy = clientTlsPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public EndpointPolicy withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public EndpointPolicy withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endpointMatcher")
    public EndpointMatcher endpointMatcher;
    public EndpointPolicy withEndpointMatcher(EndpointMatcher endpointMatcher) {
        this.endpointMatcher = endpointMatcher;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public EndpointPolicy withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public EndpointPolicy withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serverTlsPolicy")
    public String serverTlsPolicy;
    public EndpointPolicy withServerTlsPolicy(String serverTlsPolicy) {
        this.serverTlsPolicy = serverTlsPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trafficPortSelector")
    public TrafficPortSelector trafficPortSelector;
    public EndpointPolicy withTrafficPortSelector(TrafficPortSelector trafficPortSelector) {
        this.trafficPortSelector = trafficPortSelector;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public EndpointPolicyTypeEnum type;
    public EndpointPolicy withType(EndpointPolicyTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public EndpointPolicy withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}