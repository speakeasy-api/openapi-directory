package openapisdk.models.operations;



public class ListUsageRecordYesterdayRequest {
    public String serverURL;
    public ListUsageRecordYesterdayRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListUsageRecordYesterdayPathParams pathParams;
    public ListUsageRecordYesterdayRequest withPathParams(ListUsageRecordYesterdayPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListUsageRecordYesterdayQueryParams queryParams;
    public ListUsageRecordYesterdayRequest withQueryParams(ListUsageRecordYesterdayQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListUsageRecordYesterdaySecurity security;
    public ListUsageRecordYesterdayRequest withSecurity(ListUsageRecordYesterdaySecurity security) {
        this.security = security;
        return this;
    }
}