package openapisdk.models.operations;



public class FetchStyleSheetRequest {
    public String serverURL;
    public FetchStyleSheetRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchStyleSheetPathParams pathParams;
    public FetchStyleSheetRequest withPathParams(FetchStyleSheetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchStyleSheetSecurity security;
    public FetchStyleSheetRequest withSecurity(FetchStyleSheetSecurity security) {
        this.security = security;
        return this;
    }
}