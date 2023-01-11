package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentOrderreturnsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=merchantId")
    public String merchantId;
    public ContentOrderreturnsListPathParams withMerchantId(String merchantId) {
        this.merchantId = merchantId;
        return this;
    }
}