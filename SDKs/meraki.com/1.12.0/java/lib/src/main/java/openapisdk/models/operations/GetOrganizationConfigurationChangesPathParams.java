package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationConfigurationChangesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public GetOrganizationConfigurationChangesPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}