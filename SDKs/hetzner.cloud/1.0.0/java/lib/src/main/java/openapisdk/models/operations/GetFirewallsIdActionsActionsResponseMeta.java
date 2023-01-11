package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetFirewallsIdActionsActionsResponseMeta {
    @JsonProperty("pagination")
    public GetFirewallsIdActionsActionsResponseMetaPagination pagination;
    public GetFirewallsIdActionsActionsResponseMeta withPagination(GetFirewallsIdActionsActionsResponseMetaPagination pagination) {
        this.pagination = pagination;
        return this;
    }
}