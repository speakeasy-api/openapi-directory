package openapisdk.models.operations;



public class FetchUsAppToPersonUsecaseRequest {
    public String serverURL;
    public FetchUsAppToPersonUsecaseRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchUsAppToPersonUsecasePathParams pathParams;
    public FetchUsAppToPersonUsecaseRequest withPathParams(FetchUsAppToPersonUsecasePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchUsAppToPersonUsecaseQueryParams queryParams;
    public FetchUsAppToPersonUsecaseRequest withQueryParams(FetchUsAppToPersonUsecaseQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FetchUsAppToPersonUsecaseSecurity security;
    public FetchUsAppToPersonUsecaseRequest withSecurity(FetchUsAppToPersonUsecaseSecurity security) {
        this.security = security;
        return this;
    }
}