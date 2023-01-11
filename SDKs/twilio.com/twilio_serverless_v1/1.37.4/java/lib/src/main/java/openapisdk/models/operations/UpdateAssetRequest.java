package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAssetRequest {
    public String serverURL;
    public UpdateAssetRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateAssetPathParams pathParams;
    public UpdateAssetRequest withPathParams(UpdateAssetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateAssetUpdateAssetRequest request;
    public UpdateAssetRequest withRequest(UpdateAssetUpdateAssetRequest request) {
        this.request = request;
        return this;
    }
    public UpdateAssetSecurity security;
    public UpdateAssetRequest withSecurity(UpdateAssetSecurity security) {
        this.security = security;
        return this;
    }
}