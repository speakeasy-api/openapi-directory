package openapisdk.models.operations;



public class DeleteWirelessRatePlanRequest {
    public String serverURL;
    public DeleteWirelessRatePlanRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteWirelessRatePlanPathParams pathParams;
    public DeleteWirelessRatePlanRequest withPathParams(DeleteWirelessRatePlanPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteWirelessRatePlanSecurity security;
    public DeleteWirelessRatePlanRequest withSecurity(DeleteWirelessRatePlanSecurity security) {
        this.security = security;
        return this;
    }
}