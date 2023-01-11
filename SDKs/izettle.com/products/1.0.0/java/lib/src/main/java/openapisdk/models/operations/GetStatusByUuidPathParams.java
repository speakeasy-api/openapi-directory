package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStatusByUuidPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=importUuid")
    public String importUuid;
    public GetStatusByUuidPathParams withImportUuid(String importUuid) {
        this.importUuid = importUuid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationUuid")
    public String organizationUuid;
    public GetStatusByUuidPathParams withOrganizationUuid(String organizationUuid) {
        this.organizationUuid = organizationUuid;
        return this;
    }
}