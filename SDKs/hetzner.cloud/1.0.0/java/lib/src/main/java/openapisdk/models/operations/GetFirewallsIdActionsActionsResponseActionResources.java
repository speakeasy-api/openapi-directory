package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetFirewallsIdActionsActionsResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public GetFirewallsIdActionsActionsResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public GetFirewallsIdActionsActionsResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}