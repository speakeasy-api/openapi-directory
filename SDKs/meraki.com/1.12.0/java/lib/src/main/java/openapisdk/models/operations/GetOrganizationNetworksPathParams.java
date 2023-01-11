package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationNetworksPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public GetOrganizationNetworksPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}