package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImportLibraryV2PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationUuid")
    public String organizationUuid;
    public ImportLibraryV2PathParams withOrganizationUuid(String organizationUuid) {
        this.organizationUuid = organizationUuid;
        return this;
    }
}