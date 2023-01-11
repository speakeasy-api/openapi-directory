package openapisdk.models.operations;



public class ListAccountUsageRecordRequest {
    public String serverURL;
    public ListAccountUsageRecordRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListAccountUsageRecordQueryParams queryParams;
    public ListAccountUsageRecordRequest withQueryParams(ListAccountUsageRecordQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAccountUsageRecordSecurity security;
    public ListAccountUsageRecordRequest withSecurity(ListAccountUsageRecordSecurity security) {
        this.security = security;
        return this;
    }
}