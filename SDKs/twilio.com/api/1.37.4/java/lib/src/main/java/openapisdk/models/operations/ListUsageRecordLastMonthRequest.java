package openapisdk.models.operations;



public class ListUsageRecordLastMonthRequest {
    public String serverURL;
    public ListUsageRecordLastMonthRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListUsageRecordLastMonthPathParams pathParams;
    public ListUsageRecordLastMonthRequest withPathParams(ListUsageRecordLastMonthPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListUsageRecordLastMonthQueryParams queryParams;
    public ListUsageRecordLastMonthRequest withQueryParams(ListUsageRecordLastMonthQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListUsageRecordLastMonthSecurity security;
    public ListUsageRecordLastMonthRequest withSecurity(ListUsageRecordLastMonthSecurity security) {
        this.security = security;
        return this;
    }
}