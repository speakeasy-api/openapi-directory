package openapisdk.models.operations;



public class DeleteMemberRequest {
    public String serverURL;
    public DeleteMemberRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteMemberPathParams pathParams;
    public DeleteMemberRequest withPathParams(DeleteMemberPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteMemberHeaders headers;
    public DeleteMemberRequest withHeaders(DeleteMemberHeaders headers) {
        this.headers = headers;
        return this;
    }
    public DeleteMemberSecurity security;
    public DeleteMemberRequest withSecurity(DeleteMemberSecurity security) {
        this.security = security;
        return this;
    }
}