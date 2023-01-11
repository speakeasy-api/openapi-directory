package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostFirewallsCreateFirewallResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public PostFirewallsCreateFirewallResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PostFirewallsCreateFirewallResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}