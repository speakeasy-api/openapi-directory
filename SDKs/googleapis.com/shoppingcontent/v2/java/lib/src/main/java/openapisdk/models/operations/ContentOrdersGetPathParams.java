package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentOrdersGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=merchantId")
    public String merchantId;
    public ContentOrdersGetPathParams withMerchantId(String merchantId) {
        this.merchantId = merchantId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=orderId")
    public String orderId;
    public ContentOrdersGetPathParams withOrderId(String orderId) {
        this.orderId = orderId;
        return this;
    }
}