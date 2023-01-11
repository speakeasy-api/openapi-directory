package openapisdk.models.operations;



public class FetchCustomerProfileRequest {
    public String serverURL;
    public FetchCustomerProfileRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchCustomerProfilePathParams pathParams;
    public FetchCustomerProfileRequest withPathParams(FetchCustomerProfilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchCustomerProfileSecurity security;
    public FetchCustomerProfileRequest withSecurity(FetchCustomerProfileSecurity security) {
        this.security = security;
        return this;
    }
}