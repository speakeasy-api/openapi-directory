package openapisdk.models.operations;



public class DeleteIpRecordRequest {
    public String serverURL;
    public DeleteIpRecordRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteIpRecordPathParams pathParams;
    public DeleteIpRecordRequest withPathParams(DeleteIpRecordPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteIpRecordSecurity security;
    public DeleteIpRecordRequest withSecurity(DeleteIpRecordSecurity security) {
        this.security = security;
        return this;
    }
}