package openapisdk.models.operations;



public class FetchOutgoingCallerIdRequest {
    public String serverURL;
    public FetchOutgoingCallerIdRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchOutgoingCallerIdPathParams pathParams;
    public FetchOutgoingCallerIdRequest withPathParams(FetchOutgoingCallerIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchOutgoingCallerIdSecurity security;
    public FetchOutgoingCallerIdRequest withSecurity(FetchOutgoingCallerIdSecurity security) {
        this.security = security;
        return this;
    }
}