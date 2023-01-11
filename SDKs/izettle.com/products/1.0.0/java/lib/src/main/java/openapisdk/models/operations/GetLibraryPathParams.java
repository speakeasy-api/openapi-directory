package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLibraryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationUuid")
    public String organizationUuid;
    public GetLibraryPathParams withOrganizationUuid(String organizationUuid) {
        this.organizationUuid = organizationUuid;
        return this;
    }
}