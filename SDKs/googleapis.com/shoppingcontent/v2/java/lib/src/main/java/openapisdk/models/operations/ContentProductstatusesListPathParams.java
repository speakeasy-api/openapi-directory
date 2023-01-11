package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentProductstatusesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=merchantId")
    public String merchantId;
    public ContentProductstatusesListPathParams withMerchantId(String merchantId) {
        this.merchantId = merchantId;
        return this;
    }
}