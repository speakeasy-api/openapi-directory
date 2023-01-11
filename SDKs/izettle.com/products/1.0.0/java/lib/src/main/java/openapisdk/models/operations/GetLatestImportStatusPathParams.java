package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLatestImportStatusPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationUuid")
    public String organizationUuid;
    public GetLatestImportStatusPathParams withOrganizationUuid(String organizationUuid) {
        this.organizationUuid = organizationUuid;
        return this;
    }
}