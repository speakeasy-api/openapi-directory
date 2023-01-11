package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApigatewayGateway
 * A Gateway is an API-aware HTTP proxy. It performs API-Method and/or API-Consumer specific actions based on an API Config such as authentication, policy enforcement, and backend selection.
**/
public class ApigatewayGateway {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiConfig")
    public String apiConfig;
    public ApigatewayGateway withApiConfig(String apiConfig) {
        this.apiConfig = apiConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public ApigatewayGateway withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultHostname")
    public String defaultHostname;
    public ApigatewayGateway withDefaultHostname(String defaultHostname) {
        this.defaultHostname = defaultHostname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public ApigatewayGateway withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public ApigatewayGateway withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ApigatewayGateway withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public ApigatewayGatewayStateEnum state;
    public ApigatewayGateway withState(ApigatewayGatewayStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public ApigatewayGateway withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}