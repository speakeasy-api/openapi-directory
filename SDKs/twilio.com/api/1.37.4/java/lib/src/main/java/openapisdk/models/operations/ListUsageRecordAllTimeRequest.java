package openapisdk.models.operations;



public class ListUsageRecordAllTimeRequest {
    public String serverURL;
    public ListUsageRecordAllTimeRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListUsageRecordAllTimePathParams pathParams;
    public ListUsageRecordAllTimeRequest withPathParams(ListUsageRecordAllTimePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListUsageRecordAllTimeQueryParams queryParams;
    public ListUsageRecordAllTimeRequest withQueryParams(ListUsageRecordAllTimeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListUsageRecordAllTimeSecurity security;
    public ListUsageRecordAllTimeRequest withSecurity(ListUsageRecordAllTimeSecurity security) {
        this.security = security;
        return this;
    }
}