package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApigatewayApi
 * An API that can be served by one or more Gateways.
**/
public class ApigatewayApi {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public ApigatewayApi withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public ApigatewayApi withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public ApigatewayApi withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("managedService")
    public String managedService;
    public ApigatewayApi withManagedService(String managedService) {
        this.managedService = managedService;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ApigatewayApi withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public ApigatewayApiStateEnum state;
    public ApigatewayApi withState(ApigatewayApiStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public ApigatewayApi withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}