package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOauthV1AccessTokensTokenGetAccessTokenPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=token")
    public String token;
    public GetOauthV1AccessTokensTokenGetAccessTokenPathParams withToken(String token) {
        this.token = token;
        return this;
    }
}