package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentDatafeedsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=datafeedId")
    public String datafeedId;
    public ContentDatafeedsUpdatePathParams withDatafeedId(String datafeedId) {
        this.datafeedId = datafeedId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=merchantId")
    public String merchantId;
    public ContentDatafeedsUpdatePathParams withMerchantId(String merchantId) {
        this.merchantId = merchantId;
        return this;
    }
}