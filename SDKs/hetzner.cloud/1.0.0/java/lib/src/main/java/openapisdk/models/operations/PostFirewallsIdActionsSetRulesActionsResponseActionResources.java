package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostFirewallsIdActionsSetRulesActionsResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public PostFirewallsIdActionsSetRulesActionsResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PostFirewallsIdActionsSetRulesActionsResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}