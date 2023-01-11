package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppsRevokeGrantForApplicationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=access_token")
    public String accessToken;
    public AppsRevokeGrantForApplicationPathParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=client_id")
    public String clientId;
    public AppsRevokeGrantForApplicationPathParams withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
}