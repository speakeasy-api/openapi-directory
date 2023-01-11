package openapisdk.models.operations;



public class FetchUnderstandFieldValueRequest {
    public String serverURL;
    public FetchUnderstandFieldValueRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchUnderstandFieldValuePathParams pathParams;
    public FetchUnderstandFieldValueRequest withPathParams(FetchUnderstandFieldValuePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchUnderstandFieldValueSecurity security;
    public FetchUnderstandFieldValueRequest withSecurity(FetchUnderstandFieldValueSecurity security) {
        this.security = security;
        return this;
    }
}