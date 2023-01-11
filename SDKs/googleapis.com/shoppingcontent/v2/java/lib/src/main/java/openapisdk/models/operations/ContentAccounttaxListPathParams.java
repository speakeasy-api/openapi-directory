package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentAccounttaxListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=merchantId")
    public String merchantId;
    public ContentAccounttaxListPathParams withMerchantId(String merchantId) {
        this.merchantId = merchantId;
        return this;
    }
}