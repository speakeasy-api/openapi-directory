package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateProductPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationUuid")
    public String organizationUuid;
    public CreateProductPathParams withOrganizationUuid(String organizationUuid) {
        this.organizationUuid = organizationUuid;
        return this;
    }
}