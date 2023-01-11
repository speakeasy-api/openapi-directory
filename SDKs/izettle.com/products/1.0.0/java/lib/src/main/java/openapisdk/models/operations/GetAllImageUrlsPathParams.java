package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllImageUrlsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationUuid")
    public String organizationUuid;
    public GetAllImageUrlsPathParams withOrganizationUuid(String organizationUuid) {
        this.organizationUuid = organizationUuid;
        return this;
    }
}