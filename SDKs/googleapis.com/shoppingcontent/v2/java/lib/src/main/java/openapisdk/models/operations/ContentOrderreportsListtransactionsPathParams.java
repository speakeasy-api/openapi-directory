package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentOrderreportsListtransactionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=disbursementId")
    public String disbursementId;
    public ContentOrderreportsListtransactionsPathParams withDisbursementId(String disbursementId) {
        this.disbursementId = disbursementId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=merchantId")
    public String merchantId;
    public ContentOrderreportsListtransactionsPathParams withMerchantId(String merchantId) {
        this.merchantId = merchantId;
        return this;
    }
}