package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAssetRequest {
    public String serverURL;
    public CreateAssetRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateAssetPathParams pathParams;
    public CreateAssetRequest withPathParams(CreateAssetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateAssetCreateAssetRequest request;
    public CreateAssetRequest withRequest(CreateAssetCreateAssetRequest request) {
        this.request = request;
        return this;
    }
    public CreateAssetSecurity security;
    public CreateAssetRequest withSecurity(CreateAssetSecurity security) {
        this.security = security;
        return this;
    }
}