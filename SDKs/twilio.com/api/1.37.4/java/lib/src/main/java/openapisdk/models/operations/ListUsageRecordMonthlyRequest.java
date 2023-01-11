package openapisdk.models.operations;



public class ListUsageRecordMonthlyRequest {
    public String serverURL;
    public ListUsageRecordMonthlyRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListUsageRecordMonthlyPathParams pathParams;
    public ListUsageRecordMonthlyRequest withPathParams(ListUsageRecordMonthlyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListUsageRecordMonthlyQueryParams queryParams;
    public ListUsageRecordMonthlyRequest withQueryParams(ListUsageRecordMonthlyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListUsageRecordMonthlySecurity security;
    public ListUsageRecordMonthlyRequest withSecurity(ListUsageRecordMonthlySecurity security) {
        this.security = security;
        return this;
    }
}