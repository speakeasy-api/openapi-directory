package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProductGroupsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Market-Id")
    public String xMarketId;
    public ProductGroupsHeaders withXMarketId(String xMarketId) {
        this.xMarketId = xMarketId;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Shopper-Id")
    public String xShopperId;
    public ProductGroupsHeaders withXShopperId(String xShopperId) {
        this.xShopperId = xShopperId;
        return this;
    }
}