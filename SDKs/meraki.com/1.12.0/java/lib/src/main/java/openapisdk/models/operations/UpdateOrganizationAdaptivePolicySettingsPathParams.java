package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateOrganizationAdaptivePolicySettingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public UpdateOrganizationAdaptivePolicySettingsPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}