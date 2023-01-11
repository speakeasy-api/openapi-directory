package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetFirewallsFirewallsResponseFirewallAppliedToServer {
    @JsonProperty("id")
    public Long id;
    public GetFirewallsFirewallsResponseFirewallAppliedToServer withId(Long id) {
        this.id = id;
        return this;
    }
}