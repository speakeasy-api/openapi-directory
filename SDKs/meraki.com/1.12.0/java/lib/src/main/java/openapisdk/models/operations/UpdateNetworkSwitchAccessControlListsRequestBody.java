package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateNetworkSwitchAccessControlListsRequestBody {
    @JsonProperty("rules")
    public UpdateNetworkSwitchAccessControlListsRequestBodyRules[] rules;
    public UpdateNetworkSwitchAccessControlListsRequestBody withRules(UpdateNetworkSwitchAccessControlListsRequestBodyRules[] rules) {
        this.rules = rules;
        return this;
    }
}