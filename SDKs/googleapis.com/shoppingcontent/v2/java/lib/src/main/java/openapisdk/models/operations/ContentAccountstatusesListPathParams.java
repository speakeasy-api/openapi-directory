package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentAccountstatusesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=merchantId")
    public String merchantId;
    public ContentAccountstatusesListPathParams withMerchantId(String merchantId) {
        this.merchantId = merchantId;
        return this;
    }
}