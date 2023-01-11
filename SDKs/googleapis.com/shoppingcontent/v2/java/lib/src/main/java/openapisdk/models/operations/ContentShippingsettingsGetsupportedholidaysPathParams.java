package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentShippingsettingsGetsupportedholidaysPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=merchantId")
    public String merchantId;
    public ContentShippingsettingsGetsupportedholidaysPathParams withMerchantId(String merchantId) {
        this.merchantId = merchantId;
        return this;
    }
}