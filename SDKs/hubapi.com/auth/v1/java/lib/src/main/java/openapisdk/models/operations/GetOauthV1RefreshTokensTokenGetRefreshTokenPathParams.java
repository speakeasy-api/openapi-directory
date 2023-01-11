package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOauthV1RefreshTokensTokenGetRefreshTokenPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=token")
    public String token;
    public GetOauthV1RefreshTokensTokenGetRefreshTokenPathParams withToken(String token) {
        this.token = token;
        return this;
    }
}