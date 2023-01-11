package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCategoriesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationUuid")
    public String organizationUuid;
    public CreateCategoriesPathParams withOrganizationUuid(String organizationUuid) {
        this.organizationUuid = organizationUuid;
        return this;
    }
}