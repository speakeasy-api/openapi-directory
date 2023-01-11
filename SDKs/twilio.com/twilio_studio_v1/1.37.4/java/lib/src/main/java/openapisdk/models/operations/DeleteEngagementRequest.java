package openapisdk.models.operations;



public class DeleteEngagementRequest {
    public String serverURL;
    public DeleteEngagementRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteEngagementPathParams pathParams;
    public DeleteEngagementRequest withPathParams(DeleteEngagementPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteEngagementSecurity security;
    public DeleteEngagementRequest withSecurity(DeleteEngagementSecurity security) {
        this.security = security;
        return this;
    }
}