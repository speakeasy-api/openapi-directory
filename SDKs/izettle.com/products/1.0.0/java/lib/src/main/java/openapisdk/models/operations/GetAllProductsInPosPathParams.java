package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllProductsInPosPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationUuid")
    public String organizationUuid;
    public GetAllProductsInPosPathParams withOrganizationUuid(String organizationUuid) {
        this.organizationUuid = organizationUuid;
        return this;
    }
}