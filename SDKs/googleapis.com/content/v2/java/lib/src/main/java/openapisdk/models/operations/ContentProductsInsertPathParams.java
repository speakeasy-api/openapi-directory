package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentProductsInsertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=merchantId")
    public String merchantId;
    public ContentProductsInsertPathParams withMerchantId(String merchantId) {
        this.merchantId = merchantId;
        return this;
    }
}