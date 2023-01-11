package openapisdk.models.operations;



public class FetchVariableRequest {
    public String serverURL;
    public FetchVariableRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchVariablePathParams pathParams;
    public FetchVariableRequest withPathParams(FetchVariablePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchVariableSecurity security;
    public FetchVariableRequest withSecurity(FetchVariableSecurity security) {
        this.security = security;
        return this;
    }
}