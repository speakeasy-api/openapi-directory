package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNewFactorRequest {
    public String serverURL;
    public CreateNewFactorRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateNewFactorPathParams pathParams;
    public CreateNewFactorRequest withPathParams(CreateNewFactorPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateNewFactorCreateNewFactorRequest request;
    public CreateNewFactorRequest withRequest(CreateNewFactorCreateNewFactorRequest request) {
        this.request = request;
        return this;
    }
    public CreateNewFactorSecurity security;
    public CreateNewFactorRequest withSecurity(CreateNewFactorSecurity security) {
        this.security = security;
        return this;
    }
}