package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetFirewallsFirewallsResponseMeta {
    @JsonProperty("pagination")
    public GetFirewallsFirewallsResponseMetaPagination pagination;
    public GetFirewallsFirewallsResponseMeta withPagination(GetFirewallsFirewallsResponseMetaPagination pagination) {
        this.pagination = pagination;
        return this;
    }
}