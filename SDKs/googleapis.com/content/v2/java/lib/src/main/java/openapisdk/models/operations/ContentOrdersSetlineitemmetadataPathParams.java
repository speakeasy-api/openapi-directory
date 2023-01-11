package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentOrdersSetlineitemmetadataPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=merchantId")
    public String merchantId;
    public ContentOrdersSetlineitemmetadataPathParams withMerchantId(String merchantId) {
        this.merchantId = merchantId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=orderId")
    public String orderId;
    public ContentOrdersSetlineitemmetadataPathParams withOrderId(String orderId) {
        this.orderId = orderId;
        return this;
    }
}