package openapisdk.models.operations;



public class FetchIpRecordRequest {
    public String serverURL;
    public FetchIpRecordRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchIpRecordPathParams pathParams;
    public FetchIpRecordRequest withPathParams(FetchIpRecordPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchIpRecordSecurity security;
    public FetchIpRecordRequest withSecurity(FetchIpRecordSecurity security) {
        this.security = security;
        return this;
    }
}