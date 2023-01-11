package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateProductSlugPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationUuid")
    public String organizationUuid;
    public CreateProductSlugPathParams withOrganizationUuid(String organizationUuid) {
        this.organizationUuid = organizationUuid;
        return this;
    }
}