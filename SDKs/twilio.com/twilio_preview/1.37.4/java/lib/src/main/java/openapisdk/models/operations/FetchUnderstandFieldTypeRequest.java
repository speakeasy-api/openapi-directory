package openapisdk.models.operations;



public class FetchUnderstandFieldTypeRequest {
    public String serverURL;
    public FetchUnderstandFieldTypeRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchUnderstandFieldTypePathParams pathParams;
    public FetchUnderstandFieldTypeRequest withPathParams(FetchUnderstandFieldTypePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchUnderstandFieldTypeSecurity security;
    public FetchUnderstandFieldTypeRequest withSecurity(FetchUnderstandFieldTypeSecurity security) {
        this.security = security;
        return this;
    }
}