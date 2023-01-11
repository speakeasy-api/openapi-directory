package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProductTypesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationUuid")
    public String organizationUuid;
    public GetProductTypesPathParams withOrganizationUuid(String organizationUuid) {
        this.organizationUuid = organizationUuid;
        return this;
    }
}