package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentDatafeedsInsertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=merchantId")
    public String merchantId;
    public ContentDatafeedsInsertPathParams withMerchantId(String merchantId) {
        this.merchantId = merchantId;
        return this;
    }
}