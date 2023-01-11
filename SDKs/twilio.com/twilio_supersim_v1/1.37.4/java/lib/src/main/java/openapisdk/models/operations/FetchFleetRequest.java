package openapisdk.models.operations;



public class FetchFleetRequest {
    public String serverURL;
    public FetchFleetRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchFleetPathParams pathParams;
    public FetchFleetRequest withPathParams(FetchFleetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchFleetSecurity security;
    public FetchFleetRequest withSecurity(FetchFleetSecurity security) {
        this.security = security;
        return this;
    }
}