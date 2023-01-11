package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostFirewallsCreateFirewallResponseFirewallAppliedToServer {
    @JsonProperty("id")
    public Long id;
    public PostFirewallsCreateFirewallResponseFirewallAppliedToServer withId(Long id) {
        this.id = id;
        return this;
    }
}