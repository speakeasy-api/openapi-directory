package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationAdaptivePolicySettingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public GetOrganizationAdaptivePolicySettingsPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}