package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=token")
    public String token;
    public DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenPathParams withToken(String token) {
        this.token = token;
        return this;
    }
}