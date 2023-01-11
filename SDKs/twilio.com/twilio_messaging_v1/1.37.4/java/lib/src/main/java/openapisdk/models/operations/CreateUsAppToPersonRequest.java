package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateUsAppToPersonRequest {
    public String serverURL;
    public CreateUsAppToPersonRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateUsAppToPersonPathParams pathParams;
    public CreateUsAppToPersonRequest withPathParams(CreateUsAppToPersonPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateUsAppToPersonCreateUsAppToPersonRequest request;
    public CreateUsAppToPersonRequest withRequest(CreateUsAppToPersonCreateUsAppToPersonRequest request) {
        this.request = request;
        return this;
    }
    public CreateUsAppToPersonSecurity security;
    public CreateUsAppToPersonRequest withSecurity(CreateUsAppToPersonSecurity security) {
        this.security = security;
        return this;
    }
}