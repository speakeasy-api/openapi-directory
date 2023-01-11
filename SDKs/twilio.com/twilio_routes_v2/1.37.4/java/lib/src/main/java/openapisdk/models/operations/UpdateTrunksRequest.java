package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTrunksRequest {
    public String serverURL;
    public UpdateTrunksRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateTrunksPathParams pathParams;
    public UpdateTrunksRequest withPathParams(UpdateTrunksPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateTrunksUpdateTrunksRequest request;
    public UpdateTrunksRequest withRequest(UpdateTrunksUpdateTrunksRequest request) {
        this.request = request;
        return this;
    }
    public UpdateTrunksSecurity security;
    public UpdateTrunksRequest withSecurity(UpdateTrunksSecurity security) {
        this.security = security;
        return this;
    }
}