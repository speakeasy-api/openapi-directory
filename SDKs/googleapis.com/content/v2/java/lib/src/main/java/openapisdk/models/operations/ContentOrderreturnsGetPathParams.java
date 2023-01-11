package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentOrderreturnsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=merchantId")
    public String merchantId;
    public ContentOrderreturnsGetPathParams withMerchantId(String merchantId) {
        this.merchantId = merchantId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=returnId")
    public String returnId;
    public ContentOrderreturnsGetPathParams withReturnId(String returnId) {
        this.returnId = returnId;
        return this;
    }
}