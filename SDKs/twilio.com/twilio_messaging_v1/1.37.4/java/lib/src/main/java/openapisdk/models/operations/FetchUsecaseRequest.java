package openapisdk.models.operations;



public class FetchUsecaseRequest {
    public String serverURL;
    public FetchUsecaseRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchUsecaseSecurity security;
    public FetchUsecaseRequest withSecurity(FetchUsecaseSecurity security) {
        this.security = security;
        return this;
    }
}