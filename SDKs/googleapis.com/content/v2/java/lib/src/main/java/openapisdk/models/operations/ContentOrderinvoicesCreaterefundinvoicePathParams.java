package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentOrderinvoicesCreaterefundinvoicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=merchantId")
    public String merchantId;
    public ContentOrderinvoicesCreaterefundinvoicePathParams withMerchantId(String merchantId) {
        this.merchantId = merchantId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=orderId")
    public String orderId;
    public ContentOrderinvoicesCreaterefundinvoicePathParams withOrderId(String orderId) {
        this.orderId = orderId;
        return this;
    }
}