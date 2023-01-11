package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateOrganizationNetworkPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public CreateOrganizationNetworkPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}