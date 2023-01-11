package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseRequestBody {
    @JsonProperty("selected_organization_ids")
    public Long[] selectedOrganizationIds;
    public EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseRequestBody withSelectedOrganizationIds(Long[] selectedOrganizationIds) {
        this.selectedOrganizationIds = selectedOrganizationIds;
        return this;
    }
}