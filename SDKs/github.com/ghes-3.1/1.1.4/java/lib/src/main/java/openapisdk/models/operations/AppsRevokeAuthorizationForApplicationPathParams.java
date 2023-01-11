package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppsRevokeAuthorizationForApplicationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=access_token")
    public String accessToken;
    public AppsRevokeAuthorizationForApplicationPathParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=client_id")
    public String clientId;
    public AppsRevokeAuthorizationForApplicationPathParams withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
}