package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateOrganizationConfigTemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public CreateOrganizationConfigTemplatePathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}