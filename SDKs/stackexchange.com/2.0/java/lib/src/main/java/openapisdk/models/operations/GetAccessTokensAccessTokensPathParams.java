package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccessTokensAccessTokensPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accessTokens")
    public String accessTokens;
    public GetAccessTokensAccessTokensPathParams withAccessTokens(String accessTokens) {
        this.accessTokens = accessTokens;
        return this;
    }
}