package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationConfigTemplatesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public GetOrganizationConfigTemplatesPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}