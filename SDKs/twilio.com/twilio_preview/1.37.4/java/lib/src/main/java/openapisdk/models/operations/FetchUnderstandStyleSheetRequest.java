package openapisdk.models.operations;



public class FetchUnderstandStyleSheetRequest {
    public String serverURL;
    public FetchUnderstandStyleSheetRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchUnderstandStyleSheetPathParams pathParams;
    public FetchUnderstandStyleSheetRequest withPathParams(FetchUnderstandStyleSheetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchUnderstandStyleSheetSecurity security;
    public FetchUnderstandStyleSheetRequest withSecurity(FetchUnderstandStyleSheetSecurity security) {
        this.security = security;
        return this;
    }
}