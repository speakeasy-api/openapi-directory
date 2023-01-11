package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RegeneratePolicies200ApplicationJsonData {
    @JsonProperty("policies")
    public RegeneratePolicies200ApplicationJsonDataPoliciesEnum policies;
    public RegeneratePolicies200ApplicationJsonData withPolicies(RegeneratePolicies200ApplicationJsonDataPoliciesEnum policies) {
        this.policies = policies;
        return this;
    }
}