package openapisdk.models.operations;



public class ListRatePlanRequest {
    public String serverURL;
    public ListRatePlanRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListRatePlanQueryParams queryParams;
    public ListRatePlanRequest withQueryParams(ListRatePlanQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListRatePlanSecurity security;
    public ListRatePlanRequest withSecurity(ListRatePlanSecurity security) {
        this.security = security;
        return this;
    }
}