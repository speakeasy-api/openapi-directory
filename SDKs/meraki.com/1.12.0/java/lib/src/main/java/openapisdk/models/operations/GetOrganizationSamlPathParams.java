package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationSamlPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public GetOrganizationSamlPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}