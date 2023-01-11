package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAppsAccessTokensDeAuthenticatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accessTokens")
    public String accessTokens;
    public GetAppsAccessTokensDeAuthenticatePathParams withAccessTokens(String accessTokens) {
        this.accessTokens = accessTokens;
        return this;
    }
}