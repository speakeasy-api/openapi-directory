package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLoadBalancersIdActionsActionsResponse {
    @JsonProperty("actions")
    public GetLoadBalancersIdActionsActionsResponseAction[] actions;
    public GetLoadBalancersIdActionsActionsResponse withActions(GetLoadBalancersIdActionsActionsResponseAction[] actions) {
        this.actions = actions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public GetLoadBalancersIdActionsActionsResponseMeta meta;
    public GetLoadBalancersIdActionsActionsResponse withMeta(GetLoadBalancersIdActionsActionsResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}