package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentDatafeedstatusesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=merchantId")
    public String merchantId;
    public ContentDatafeedstatusesListPathParams withMerchantId(String merchantId) {
        this.merchantId = merchantId;
        return this;
    }
}