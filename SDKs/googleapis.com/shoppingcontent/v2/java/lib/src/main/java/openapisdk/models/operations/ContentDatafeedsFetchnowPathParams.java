package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentDatafeedsFetchnowPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=datafeedId")
    public String datafeedId;
    public ContentDatafeedsFetchnowPathParams withDatafeedId(String datafeedId) {
        this.datafeedId = datafeedId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=merchantId")
    public String merchantId;
    public ContentDatafeedsFetchnowPathParams withMerchantId(String merchantId) {
        this.merchantId = merchantId;
        return this;
    }
}