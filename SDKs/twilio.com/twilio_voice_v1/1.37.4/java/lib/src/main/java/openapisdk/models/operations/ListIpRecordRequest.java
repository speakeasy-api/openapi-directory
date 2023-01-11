package openapisdk.models.operations;



public class ListIpRecordRequest {
    public String serverURL;
    public ListIpRecordRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListIpRecordQueryParams queryParams;
    public ListIpRecordRequest withQueryParams(ListIpRecordQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListIpRecordSecurity security;
    public ListIpRecordRequest withSecurity(ListIpRecordSecurity security) {
        this.security = security;
        return this;
    }
}