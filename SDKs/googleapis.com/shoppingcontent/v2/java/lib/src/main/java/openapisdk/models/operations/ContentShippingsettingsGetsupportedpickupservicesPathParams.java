package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentShippingsettingsGetsupportedpickupservicesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=merchantId")
    public String merchantId;
    public ContentShippingsettingsGetsupportedpickupservicesPathParams withMerchantId(String merchantId) {
        this.merchantId = merchantId;
        return this;
    }
}