package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentShippingsettingsGetsupportedcarriersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=merchantId")
    public String merchantId;
    public ContentShippingsettingsGetsupportedcarriersPathParams withMerchantId(String merchantId) {
        this.merchantId = merchantId;
        return this;
    }
}