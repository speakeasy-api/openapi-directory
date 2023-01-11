package openapisdk.models.operations;



public class FetchEsimProfileRequest {
    public String serverURL;
    public FetchEsimProfileRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchEsimProfilePathParams pathParams;
    public FetchEsimProfileRequest withPathParams(FetchEsimProfilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchEsimProfileSecurity security;
    public FetchEsimProfileRequest withSecurity(FetchEsimProfileSecurity security) {
        this.security = security;
        return this;
    }
}