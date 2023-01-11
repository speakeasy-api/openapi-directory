package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateOrganizationAdaptivePolicyAclRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateOrganizationAdaptivePolicyAclRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("ipVersion")
    public CreateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum ipVersion;
    public CreateOrganizationAdaptivePolicyAclRequestBody withIpVersion(CreateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum ipVersion) {
        this.ipVersion = ipVersion;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateOrganizationAdaptivePolicyAclRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("rules")
    public CreateOrganizationAdaptivePolicyAclRequestBodyRules[] rules;
    public CreateOrganizationAdaptivePolicyAclRequestBody withRules(CreateOrganizationAdaptivePolicyAclRequestBodyRules[] rules) {
        this.rules = rules;
        return this;
    }
}