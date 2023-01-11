package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateVariableRequest {
    public String serverURL;
    public CreateVariableRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateVariablePathParams pathParams;
    public CreateVariableRequest withPathParams(CreateVariablePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateVariableCreateVariableRequest request;
    public CreateVariableRequest withRequest(CreateVariableCreateVariableRequest request) {
        this.request = request;
        return this;
    }
    public CreateVariableSecurity security;
    public CreateVariableRequest withSecurity(CreateVariableSecurity security) {
        this.security = security;
        return this;
    }
}