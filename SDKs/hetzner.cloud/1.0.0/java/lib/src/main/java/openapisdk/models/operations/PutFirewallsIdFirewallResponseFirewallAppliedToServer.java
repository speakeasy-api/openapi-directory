package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutFirewallsIdFirewallResponseFirewallAppliedToServer {
    @JsonProperty("id")
    public Long id;
    public PutFirewallsIdFirewallResponseFirewallAppliedToServer withId(Long id) {
        this.id = id;
        return this;
    }
}