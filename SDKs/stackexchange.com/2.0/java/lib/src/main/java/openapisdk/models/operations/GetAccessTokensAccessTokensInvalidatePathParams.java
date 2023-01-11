package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccessTokensAccessTokensInvalidatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accessTokens")
    public String accessTokens;
    public GetAccessTokensAccessTokensInvalidatePathParams withAccessTokens(String accessTokens) {
        this.accessTokens = accessTokens;
        return this;
    }
}