package openapisdk.models.operations;



public class ListWirelessRatePlanRequest {
    public String serverURL;
    public ListWirelessRatePlanRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListWirelessRatePlanQueryParams queryParams;
    public ListWirelessRatePlanRequest withQueryParams(ListWirelessRatePlanQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListWirelessRatePlanSecurity security;
    public ListWirelessRatePlanRequest withSecurity(ListWirelessRatePlanSecurity security) {
        this.security = security;
        return this;
    }
}