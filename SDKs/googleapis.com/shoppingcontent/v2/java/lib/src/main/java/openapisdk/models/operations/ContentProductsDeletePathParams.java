package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentProductsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=merchantId")
    public String merchantId;
    public ContentProductsDeletePathParams withMerchantId(String merchantId) {
        this.merchantId = merchantId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=productId")
    public String productId;
    public ContentProductsDeletePathParams withProductId(String productId) {
        this.productId = productId;
        return this;
    }
}