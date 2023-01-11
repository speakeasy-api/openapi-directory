package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentShippingsettingsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=merchantId")
    public String merchantId;
    public ContentShippingsettingsListPathParams withMerchantId(String merchantId) {
        this.merchantId = merchantId;
        return this;
    }
}