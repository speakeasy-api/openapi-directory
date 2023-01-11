package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllDiscountsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationUuid")
    public String organizationUuid;
    public GetAllDiscountsPathParams withOrganizationUuid(String organizationUuid) {
        this.organizationUuid = organizationUuid;
        return this;
    }
}