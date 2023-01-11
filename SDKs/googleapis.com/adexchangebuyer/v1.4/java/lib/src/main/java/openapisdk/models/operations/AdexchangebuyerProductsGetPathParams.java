package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdexchangebuyerProductsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=productId")
    public String productId;
    public AdexchangebuyerProductsGetPathParams withProductId(String productId) {
        this.productId = productId;
        return this;
    }
}