package openapisdk.models.operations;



public class DeleteSyncServiceRequest {
    public String serverURL;
    public DeleteSyncServiceRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteSyncServicePathParams pathParams;
    public DeleteSyncServiceRequest withPathParams(DeleteSyncServicePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteSyncServiceSecurity security;
    public DeleteSyncServiceRequest withSecurity(DeleteSyncServiceSecurity security) {
        this.security = security;
        return this;
    }
}