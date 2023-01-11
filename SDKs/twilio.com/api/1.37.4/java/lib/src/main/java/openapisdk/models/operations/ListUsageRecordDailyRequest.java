package openapisdk.models.operations;



public class ListUsageRecordDailyRequest {
    public String serverURL;
    public ListUsageRecordDailyRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListUsageRecordDailyPathParams pathParams;
    public ListUsageRecordDailyRequest withPathParams(ListUsageRecordDailyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListUsageRecordDailyQueryParams queryParams;
    public ListUsageRecordDailyRequest withQueryParams(ListUsageRecordDailyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListUsageRecordDailySecurity security;
    public ListUsageRecordDailyRequest withSecurity(ListUsageRecordDailySecurity security) {
        this.security = security;
        return this;
    }
}