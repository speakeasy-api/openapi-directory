package openapisdk.models.operations;



public class FetchFaxMediaRequest {
    public String serverURL;
    public FetchFaxMediaRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchFaxMediaPathParams pathParams;
    public FetchFaxMediaRequest withPathParams(FetchFaxMediaPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchFaxMediaSecurity security;
    public FetchFaxMediaRequest withSecurity(FetchFaxMediaSecurity security) {
        this.security = security;
        return this;
    }
}