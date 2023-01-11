package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentProductsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=merchantId")
    public String merchantId;
    public ContentProductsGetPathParams withMerchantId(String merchantId) {
        this.merchantId = merchantId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=productId")
    public String productId;
    public ContentProductsGetPathParams withProductId(String productId) {
        this.productId = productId;
        return this;
    }
}