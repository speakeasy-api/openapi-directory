package openapisdk.models.operations;



public class DeleteFlexFlowRequest {
    public String serverURL;
    public DeleteFlexFlowRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteFlexFlowPathParams pathParams;
    public DeleteFlexFlowRequest withPathParams(DeleteFlexFlowPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteFlexFlowSecurity security;
    public DeleteFlexFlowRequest withSecurity(DeleteFlexFlowSecurity security) {
        this.security = security;
        return this;
    }
}