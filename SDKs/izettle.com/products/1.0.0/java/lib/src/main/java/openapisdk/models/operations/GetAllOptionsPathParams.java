package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllOptionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationUuid")
    public String organizationUuid;
    public GetAllOptionsPathParams withOrganizationUuid(String organizationUuid) {
        this.organizationUuid = organizationUuid;
        return this;
    }
}