package openapisdk.models.operations;



public class DeleteRatePlanRequest {
    public String serverURL;
    public DeleteRatePlanRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteRatePlanPathParams pathParams;
    public DeleteRatePlanRequest withPathParams(DeleteRatePlanPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteRatePlanSecurity security;
    public DeleteRatePlanRequest withSecurity(DeleteRatePlanSecurity security) {
        this.security = security;
        return this;
    }
}