package openapisdk.models.operations;



public class FetchUsageTriggerRequest {
    public String serverURL;
    public FetchUsageTriggerRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchUsageTriggerPathParams pathParams;
    public FetchUsageTriggerRequest withPathParams(FetchUsageTriggerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchUsageTriggerSecurity security;
    public FetchUsageTriggerRequest withSecurity(FetchUsageTriggerSecurity security) {
        this.security = security;
        return this;
    }
}