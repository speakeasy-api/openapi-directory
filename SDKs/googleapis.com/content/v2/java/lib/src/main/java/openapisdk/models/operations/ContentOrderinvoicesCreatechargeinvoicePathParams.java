package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentOrderinvoicesCreatechargeinvoicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=merchantId")
    public String merchantId;
    public ContentOrderinvoicesCreatechargeinvoicePathParams withMerchantId(String merchantId) {
        this.merchantId = merchantId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=orderId")
    public String orderId;
    public ContentOrderinvoicesCreatechargeinvoicePathParams withOrderId(String orderId) {
        this.orderId = orderId;
        return this;
    }
}