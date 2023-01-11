package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDiscountPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationUuid")
    public String organizationUuid;
    public CreateDiscountPathParams withOrganizationUuid(String organizationUuid) {
        this.organizationUuid = organizationUuid;
        return this;
    }
}