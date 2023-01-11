package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Market-Id")
    public String xMarketId;
    public GetHeaders withXMarketId(String xMarketId) {
        this.xMarketId = xMarketId;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Shopper-Id")
    public String xShopperId;
    public GetHeaders withXShopperId(String xShopperId) {
        this.xShopperId = xShopperId;
        return this;
    }
}