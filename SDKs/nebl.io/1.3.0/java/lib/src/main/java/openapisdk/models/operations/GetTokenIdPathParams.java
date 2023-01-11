package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTokenIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tokensymbol")
    public String tokensymbol;
    public GetTokenIdPathParams withTokensymbol(String tokensymbol) {
        this.tokensymbol = tokensymbol;
        return this;
    }
}