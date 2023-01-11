package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProductPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationUuid")
    public String organizationUuid;
    public GetProductPathParams withOrganizationUuid(String organizationUuid) {
        this.organizationUuid = organizationUuid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=productUuid")
    public String productUuid;
    public GetProductPathParams withProductUuid(String productUuid) {
        this.productUuid = productUuid;
        return this;
    }
}