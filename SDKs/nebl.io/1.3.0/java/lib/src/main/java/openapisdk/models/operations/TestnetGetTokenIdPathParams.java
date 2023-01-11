package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TestnetGetTokenIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tokensymbol")
    public String tokensymbol;
    public TestnetGetTokenIdPathParams withTokensymbol(String tokensymbol) {
        this.tokensymbol = tokensymbol;
        return this;
    }
}