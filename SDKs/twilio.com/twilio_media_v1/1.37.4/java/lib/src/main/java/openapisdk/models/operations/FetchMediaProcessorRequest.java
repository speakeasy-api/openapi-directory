package openapisdk.models.operations;



public class FetchMediaProcessorRequest {
    public String serverURL;
    public FetchMediaProcessorRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchMediaProcessorPathParams pathParams;
    public FetchMediaProcessorRequest withPathParams(FetchMediaProcessorPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchMediaProcessorSecurity security;
    public FetchMediaProcessorRequest withSecurity(FetchMediaProcessorSecurity security) {
        this.security = security;
        return this;
    }
}