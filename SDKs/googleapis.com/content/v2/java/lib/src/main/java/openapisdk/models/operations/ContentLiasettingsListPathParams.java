package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentLiasettingsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=merchantId")
    public String merchantId;
    public ContentLiasettingsListPathParams withMerchantId(String merchantId) {
        this.merchantId = merchantId;
        return this;
    }
}