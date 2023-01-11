package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationSamlIdpsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public GetOrganizationSamlIdpsPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}