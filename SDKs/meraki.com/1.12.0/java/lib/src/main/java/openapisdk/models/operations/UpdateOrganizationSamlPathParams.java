package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateOrganizationSamlPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public UpdateOrganizationSamlPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}