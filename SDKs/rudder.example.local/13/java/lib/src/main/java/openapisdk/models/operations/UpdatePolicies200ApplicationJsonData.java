package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdatePolicies200ApplicationJsonData {
    @JsonProperty("policies")
    public UpdatePolicies200ApplicationJsonDataPoliciesEnum policies;
    public UpdatePolicies200ApplicationJsonData withPolicies(UpdatePolicies200ApplicationJsonDataPoliciesEnum policies) {
        this.policies = policies;
        return this;
    }
}