package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateVariableRequest {
    public String serverURL;
    public UpdateVariableRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateVariablePathParams pathParams;
    public UpdateVariableRequest withPathParams(UpdateVariablePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateVariableUpdateVariableRequest request;
    public UpdateVariableRequest withRequest(UpdateVariableUpdateVariableRequest request) {
        this.request = request;
        return this;
    }
    public UpdateVariableSecurity security;
    public UpdateVariableRequest withSecurity(UpdateVariableSecurity security) {
        this.security = security;
        return this;
    }
}