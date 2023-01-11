package openapisdk.models.operations;



public class ListUsageRecordYearlyRequest {
    public String serverURL;
    public ListUsageRecordYearlyRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListUsageRecordYearlyPathParams pathParams;
    public ListUsageRecordYearlyRequest withPathParams(ListUsageRecordYearlyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListUsageRecordYearlyQueryParams queryParams;
    public ListUsageRecordYearlyRequest withQueryParams(ListUsageRecordYearlyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListUsageRecordYearlySecurity security;
    public ListUsageRecordYearlyRequest withSecurity(ListUsageRecordYearlySecurity security) {
        this.security = security;
        return this;
    }
}