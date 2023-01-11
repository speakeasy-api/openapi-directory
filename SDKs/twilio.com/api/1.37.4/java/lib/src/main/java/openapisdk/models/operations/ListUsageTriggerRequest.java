package openapisdk.models.operations;



public class ListUsageTriggerRequest {
    public String serverURL;
    public ListUsageTriggerRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListUsageTriggerPathParams pathParams;
    public ListUsageTriggerRequest withPathParams(ListUsageTriggerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListUsageTriggerQueryParams queryParams;
    public ListUsageTriggerRequest withQueryParams(ListUsageTriggerQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListUsageTriggerSecurity security;
    public ListUsageTriggerRequest withSecurity(ListUsageTriggerSecurity security) {
        this.security = security;
        return this;
    }
}