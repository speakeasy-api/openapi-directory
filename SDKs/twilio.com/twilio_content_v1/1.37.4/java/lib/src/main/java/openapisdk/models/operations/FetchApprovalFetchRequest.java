package openapisdk.models.operations;



public class FetchApprovalFetchRequest {
    public String serverURL;
    public FetchApprovalFetchRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchApprovalFetchPathParams pathParams;
    public FetchApprovalFetchRequest withPathParams(FetchApprovalFetchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchApprovalFetchSecurity security;
    public FetchApprovalFetchRequest withSecurity(FetchApprovalFetchSecurity security) {
        this.security = security;
        return this;
    }
}