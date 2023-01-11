package openapisdk.models.operations;



public class FetchMemberRequest {
    public String serverURL;
    public FetchMemberRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchMemberPathParams pathParams;
    public FetchMemberRequest withPathParams(FetchMemberPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchMemberSecurity security;
    public FetchMemberRequest withSecurity(FetchMemberSecurity security) {
        this.security = security;
        return this;
    }
}