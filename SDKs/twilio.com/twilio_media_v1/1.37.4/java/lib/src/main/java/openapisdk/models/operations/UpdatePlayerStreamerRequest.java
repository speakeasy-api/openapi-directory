package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePlayerStreamerRequest {
    public String serverURL;
    public UpdatePlayerStreamerRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdatePlayerStreamerPathParams pathParams;
    public UpdatePlayerStreamerRequest withPathParams(UpdatePlayerStreamerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdatePlayerStreamerUpdatePlayerStreamerRequest request;
    public UpdatePlayerStreamerRequest withRequest(UpdatePlayerStreamerUpdatePlayerStreamerRequest request) {
        this.request = request;
        return this;
    }
    public UpdatePlayerStreamerSecurity security;
    public UpdatePlayerStreamerRequest withSecurity(UpdatePlayerStreamerSecurity security) {
        this.security = security;
        return this;
    }
}