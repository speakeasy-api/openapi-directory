package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CountAllProductsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationUuid")
    public String organizationUuid;
    public CountAllProductsPathParams withOrganizationUuid(String organizationUuid) {
        this.organizationUuid = organizationUuid;
        return this;
    }
}