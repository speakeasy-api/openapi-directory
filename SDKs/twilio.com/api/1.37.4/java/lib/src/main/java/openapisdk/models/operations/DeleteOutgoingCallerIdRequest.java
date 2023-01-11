package openapisdk.models.operations;



public class DeleteOutgoingCallerIdRequest {
    public String serverURL;
    public DeleteOutgoingCallerIdRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteOutgoingCallerIdPathParams pathParams;
    public DeleteOutgoingCallerIdRequest withPathParams(DeleteOutgoingCallerIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteOutgoingCallerIdSecurity security;
    public DeleteOutgoingCallerIdRequest withSecurity(DeleteOutgoingCallerIdSecurity security) {
        this.security = security;
        return this;
    }
}