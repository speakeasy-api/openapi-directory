package openapisdk.models.operations;



public class CreateSinkTestRequest {
    public String serverURL;
    public CreateSinkTestRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateSinkTestPathParams pathParams;
    public CreateSinkTestRequest withPathParams(CreateSinkTestPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateSinkTestSecurity security;
    public CreateSinkTestRequest withSecurity(CreateSinkTestSecurity security) {
        this.security = security;
        return this;
    }
}