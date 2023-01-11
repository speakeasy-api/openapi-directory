package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RevokeRefreshTokenV2PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=token")
    public String token;
    public RevokeRefreshTokenV2PathParams withToken(String token) {
        this.token = token;
        return this;
    }
}