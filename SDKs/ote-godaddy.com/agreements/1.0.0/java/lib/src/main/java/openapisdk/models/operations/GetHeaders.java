package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Market-Id")
    public String xMarketId;
    public GetHeaders withXMarketId(String xMarketId) {
        this.xMarketId = xMarketId;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Private-Label-Id")
    public Long xPrivateLabelId;
    public GetHeaders withXPrivateLabelId(Long xPrivateLabelId) {
        this.xPrivateLabelId = xPrivateLabelId;
        return this;
    }
}