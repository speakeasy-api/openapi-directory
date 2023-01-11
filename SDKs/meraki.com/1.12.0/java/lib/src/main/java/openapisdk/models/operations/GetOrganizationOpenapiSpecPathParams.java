package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationOpenapiSpecPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public GetOrganizationOpenapiSpecPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}