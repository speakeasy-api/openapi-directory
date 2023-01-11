package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateOrganizationBrandingPoliciesPrioritiesRequestBody {
    @JsonProperty("brandingPolicyIds")
    public String[] brandingPolicyIds;
    public UpdateOrganizationBrandingPoliciesPrioritiesRequestBody withBrandingPolicyIds(String[] brandingPolicyIds) {
        this.brandingPolicyIds = brandingPolicyIds;
        return this;
    }
}