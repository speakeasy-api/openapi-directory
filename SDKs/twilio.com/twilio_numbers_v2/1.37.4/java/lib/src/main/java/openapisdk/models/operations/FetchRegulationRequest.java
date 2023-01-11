package openapisdk.models.operations;



public class FetchRegulationRequest {
    public String serverURL;
    public FetchRegulationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchRegulationPathParams pathParams;
    public FetchRegulationRequest withPathParams(FetchRegulationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchRegulationSecurity security;
    public FetchRegulationRequest withSecurity(FetchRegulationSecurity security) {
        this.security = security;
        return this;
    }
}