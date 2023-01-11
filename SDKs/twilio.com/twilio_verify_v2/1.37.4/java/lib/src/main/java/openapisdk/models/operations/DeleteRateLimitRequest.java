package openapisdk.models.operations;



public class DeleteRateLimitRequest {
    public String serverURL;
    public DeleteRateLimitRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteRateLimitPathParams pathParams;
    public DeleteRateLimitRequest withPathParams(DeleteRateLimitPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteRateLimitSecurity security;
    public DeleteRateLimitRequest withSecurity(DeleteRateLimitSecurity security) {
        this.security = security;
        return this;
    }
}