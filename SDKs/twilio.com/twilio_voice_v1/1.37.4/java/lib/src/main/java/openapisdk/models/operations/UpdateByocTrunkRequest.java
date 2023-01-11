package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateByocTrunkRequest {
    public String serverURL;
    public UpdateByocTrunkRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateByocTrunkPathParams pathParams;
    public UpdateByocTrunkRequest withPathParams(UpdateByocTrunkPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateByocTrunkUpdateByocTrunkRequest request;
    public UpdateByocTrunkRequest withRequest(UpdateByocTrunkUpdateByocTrunkRequest request) {
        this.request = request;
        return this;
    }
    public UpdateByocTrunkSecurity security;
    public UpdateByocTrunkRequest withSecurity(UpdateByocTrunkSecurity security) {
        this.security = security;
        return this;
    }
}