package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteProductPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationUuid")
    public String organizationUuid;
    public DeleteProductPathParams withOrganizationUuid(String organizationUuid) {
        this.organizationUuid = organizationUuid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=productUuid")
    public String productUuid;
    public DeleteProductPathParams withProductUuid(String productUuid) {
        this.productUuid = productUuid;
        return this;
    }
}