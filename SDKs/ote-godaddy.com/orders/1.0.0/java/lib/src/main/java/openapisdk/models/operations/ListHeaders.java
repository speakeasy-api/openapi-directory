package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Market-Id")
    public String xMarketId;
    public ListHeaders withXMarketId(String xMarketId) {
        this.xMarketId = xMarketId;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Shopper-Id")
    public String xShopperId;
    public ListHeaders withXShopperId(String xShopperId) {
        this.xShopperId = xShopperId;
        return this;
    }
}