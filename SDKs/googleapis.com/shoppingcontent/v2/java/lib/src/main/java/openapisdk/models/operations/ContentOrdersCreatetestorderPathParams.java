package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentOrdersCreatetestorderPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=merchantId")
    public String merchantId;
    public ContentOrdersCreatetestorderPathParams withMerchantId(String merchantId) {
        this.merchantId = merchantId;
        return this;
    }
}