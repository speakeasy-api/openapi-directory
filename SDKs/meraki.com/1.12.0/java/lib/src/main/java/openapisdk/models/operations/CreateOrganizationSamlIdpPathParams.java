package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateOrganizationSamlIdpPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public CreateOrganizationSamlIdpPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}