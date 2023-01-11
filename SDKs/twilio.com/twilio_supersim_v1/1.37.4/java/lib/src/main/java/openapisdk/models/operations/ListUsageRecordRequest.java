package openapisdk.models.operations;



public class ListUsageRecordRequest {
    public String serverURL;
    public ListUsageRecordRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListUsageRecordQueryParams queryParams;
    public ListUsageRecordRequest withQueryParams(ListUsageRecordQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListUsageRecordSecurity security;
    public ListUsageRecordRequest withSecurity(ListUsageRecordSecurity security) {
        this.security = security;
        return this;
    }
}