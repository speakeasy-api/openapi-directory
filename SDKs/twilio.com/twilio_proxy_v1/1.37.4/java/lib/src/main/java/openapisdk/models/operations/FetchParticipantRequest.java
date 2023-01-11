package openapisdk.models.operations;



public class FetchParticipantRequest {
    public String serverURL;
    public FetchParticipantRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchParticipantPathParams pathParams;
    public FetchParticipantRequest withPathParams(FetchParticipantPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchParticipantSecurity security;
    public FetchParticipantRequest withSecurity(FetchParticipantSecurity security) {
        this.security = security;
        return this;
    }
}