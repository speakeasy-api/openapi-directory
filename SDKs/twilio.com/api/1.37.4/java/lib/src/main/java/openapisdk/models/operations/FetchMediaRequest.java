package openapisdk.models.operations;



public class FetchMediaRequest {
    public String serverURL;
    public FetchMediaRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchMediaPathParams pathParams;
    public FetchMediaRequest withPathParams(FetchMediaPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchMediaSecurity security;
    public FetchMediaRequest withSecurity(FetchMediaSecurity security) {
        this.security = security;
        return this;
    }
}