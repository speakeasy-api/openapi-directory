package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationSmVppAccountsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public GetOrganizationSmVppAccountsPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}