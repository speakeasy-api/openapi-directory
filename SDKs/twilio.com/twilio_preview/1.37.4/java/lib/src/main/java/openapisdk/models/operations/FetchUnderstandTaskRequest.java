package openapisdk.models.operations;



public class FetchUnderstandTaskRequest {
    public String serverURL;
    public FetchUnderstandTaskRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchUnderstandTaskPathParams pathParams;
    public FetchUnderstandTaskRequest withPathParams(FetchUnderstandTaskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchUnderstandTaskSecurity security;
    public FetchUnderstandTaskRequest withSecurity(FetchUnderstandTaskSecurity security) {
        this.security = security;
        return this;
    }
}