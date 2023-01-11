package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetFirewallsIdActionsActionIdActionResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public GetFirewallsIdActionsActionIdActionResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public GetFirewallsIdActionsActionIdActionResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}