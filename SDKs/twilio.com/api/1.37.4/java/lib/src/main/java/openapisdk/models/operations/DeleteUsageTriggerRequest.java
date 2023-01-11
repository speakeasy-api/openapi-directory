package openapisdk.models.operations;



public class DeleteUsageTriggerRequest {
    public String serverURL;
    public DeleteUsageTriggerRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteUsageTriggerPathParams pathParams;
    public DeleteUsageTriggerRequest withPathParams(DeleteUsageTriggerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteUsageTriggerSecurity security;
    public DeleteUsageTriggerRequest withSecurity(DeleteUsageTriggerSecurity security) {
        this.security = security;
        return this;
    }
}