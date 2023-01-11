package openapisdk.models.operations;



public class DeleteParticipantRequest {
    public String serverURL;
    public DeleteParticipantRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteParticipantPathParams pathParams;
    public DeleteParticipantRequest withPathParams(DeleteParticipantPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteParticipantSecurity security;
    public DeleteParticipantRequest withSecurity(DeleteParticipantSecurity security) {
        this.security = security;
        return this;
    }
}