package openapisdk.models.operations;



public class ListUsageRecordTodayRequest {
    public String serverURL;
    public ListUsageRecordTodayRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListUsageRecordTodayPathParams pathParams;
    public ListUsageRecordTodayRequest withPathParams(ListUsageRecordTodayPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListUsageRecordTodayQueryParams queryParams;
    public ListUsageRecordTodayRequest withQueryParams(ListUsageRecordTodayQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListUsageRecordTodaySecurity security;
    public ListUsageRecordTodayRequest withSecurity(ListUsageRecordTodaySecurity security) {
        this.security = security;
        return this;
    }
}