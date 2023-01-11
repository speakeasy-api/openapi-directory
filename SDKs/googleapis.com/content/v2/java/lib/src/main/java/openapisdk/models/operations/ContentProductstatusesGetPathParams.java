package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentProductstatusesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=merchantId")
    public String merchantId;
    public ContentProductstatusesGetPathParams withMerchantId(String merchantId) {
        this.merchantId = merchantId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=productId")
    public String productId;
    public ContentProductstatusesGetPathParams withProductId(String productId) {
        this.productId = productId;
        return this;
    }
}