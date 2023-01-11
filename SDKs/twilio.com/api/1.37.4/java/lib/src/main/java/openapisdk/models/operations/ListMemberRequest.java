package openapisdk.models.operations;



public class ListMemberRequest {
    public String serverURL;
    public ListMemberRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListMemberPathParams pathParams;
    public ListMemberRequest withPathParams(ListMemberPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListMemberQueryParams queryParams;
    public ListMemberRequest withQueryParams(ListMemberQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListMemberSecurity security;
    public ListMemberRequest withSecurity(ListMemberSecurity security) {
        this.security = security;
        return this;
    }
}