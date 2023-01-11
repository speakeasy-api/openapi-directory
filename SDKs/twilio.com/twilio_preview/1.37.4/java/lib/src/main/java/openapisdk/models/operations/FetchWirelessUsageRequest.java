package openapisdk.models.operations;



public class FetchWirelessUsageRequest {
    public String serverURL;
    public FetchWirelessUsageRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchWirelessUsagePathParams pathParams;
    public FetchWirelessUsageRequest withPathParams(FetchWirelessUsagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchWirelessUsageQueryParams queryParams;
    public FetchWirelessUsageRequest withQueryParams(FetchWirelessUsageQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FetchWirelessUsageSecurity security;
    public FetchWirelessUsageRequest withSecurity(FetchWirelessUsageSecurity security) {
        this.security = security;
        return this;
    }
}