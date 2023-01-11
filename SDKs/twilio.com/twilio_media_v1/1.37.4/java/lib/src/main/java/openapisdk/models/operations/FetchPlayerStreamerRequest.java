package openapisdk.models.operations;



public class FetchPlayerStreamerRequest {
    public String serverURL;
    public FetchPlayerStreamerRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchPlayerStreamerPathParams pathParams;
    public FetchPlayerStreamerRequest withPathParams(FetchPlayerStreamerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchPlayerStreamerSecurity security;
    public FetchPlayerStreamerRequest withSecurity(FetchPlayerStreamerSecurity security) {
        this.security = security;
        return this;
    }
}