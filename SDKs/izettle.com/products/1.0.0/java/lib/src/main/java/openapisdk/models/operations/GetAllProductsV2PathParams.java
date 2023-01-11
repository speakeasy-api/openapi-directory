package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllProductsV2PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationUuid")
    public String organizationUuid;
    public GetAllProductsV2PathParams withOrganizationUuid(String organizationUuid) {
        this.organizationUuid = organizationUuid;
        return this;
    }
}