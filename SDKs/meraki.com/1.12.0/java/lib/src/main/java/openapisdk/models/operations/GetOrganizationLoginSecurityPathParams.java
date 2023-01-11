package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationLoginSecurityPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public GetOrganizationLoginSecurityPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}