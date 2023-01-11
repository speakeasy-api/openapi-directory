package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateProductPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationUuid")
    public String organizationUuid;
    public UpdateProductPathParams withOrganizationUuid(String organizationUuid) {
        this.organizationUuid = organizationUuid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=productUuid")
    public String productUuid;
    public UpdateProductPathParams withProductUuid(String productUuid) {
        this.productUuid = productUuid;
        return this;
    }
}