package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppsResetAuthorizationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=access_token")
    public String accessToken;
    public AppsResetAuthorizationPathParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=client_id")
    public String clientId;
    public AppsResetAuthorizationPathParams withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
}