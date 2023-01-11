package openapisdk.models.operations;



public class FetchWirelessRatePlanRequest {
    public String serverURL;
    public FetchWirelessRatePlanRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchWirelessRatePlanPathParams pathParams;
    public FetchWirelessRatePlanRequest withPathParams(FetchWirelessRatePlanPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchWirelessRatePlanSecurity security;
    public FetchWirelessRatePlanRequest withSecurity(FetchWirelessRatePlanSecurity security) {
        this.security = security;
        return this;
    }
}