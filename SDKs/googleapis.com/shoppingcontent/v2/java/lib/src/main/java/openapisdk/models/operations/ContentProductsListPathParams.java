package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentProductsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=merchantId")
    public String merchantId;
    public ContentProductsListPathParams withMerchantId(String merchantId) {
        this.merchantId = merchantId;
        return this;
    }
}