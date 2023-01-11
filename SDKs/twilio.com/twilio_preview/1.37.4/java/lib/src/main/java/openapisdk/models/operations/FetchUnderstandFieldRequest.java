package openapisdk.models.operations;



public class FetchUnderstandFieldRequest {
    public String serverURL;
    public FetchUnderstandFieldRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchUnderstandFieldPathParams pathParams;
    public FetchUnderstandFieldRequest withPathParams(FetchUnderstandFieldPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchUnderstandFieldSecurity security;
    public FetchUnderstandFieldRequest withSecurity(FetchUnderstandFieldSecurity security) {
        this.security = security;
        return this;
    }
}