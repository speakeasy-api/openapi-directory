package openapisdk.models.operations;



public class ListUsageRecordThisMonthRequest {
    public String serverURL;
    public ListUsageRecordThisMonthRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListUsageRecordThisMonthPathParams pathParams;
    public ListUsageRecordThisMonthRequest withPathParams(ListUsageRecordThisMonthPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListUsageRecordThisMonthQueryParams queryParams;
    public ListUsageRecordThisMonthRequest withQueryParams(ListUsageRecordThisMonthQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListUsageRecordThisMonthSecurity security;
    public ListUsageRecordThisMonthRequest withSecurity(ListUsageRecordThisMonthSecurity security) {
        this.security = security;
        return this;
    }
}