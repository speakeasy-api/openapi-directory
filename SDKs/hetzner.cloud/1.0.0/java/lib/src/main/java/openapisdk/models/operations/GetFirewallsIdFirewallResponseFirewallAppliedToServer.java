package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetFirewallsIdFirewallResponseFirewallAppliedToServer {
    @JsonProperty("id")
    public Long id;
    public GetFirewallsIdFirewallResponseFirewallAppliedToServer withId(Long id) {
        this.id = id;
        return this;
    }
}