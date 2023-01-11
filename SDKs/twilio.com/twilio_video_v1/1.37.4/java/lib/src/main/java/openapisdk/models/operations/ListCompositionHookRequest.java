package openapisdk.models.operations;



public class ListCompositionHookRequest {
    public String serverURL;
    public ListCompositionHookRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListCompositionHookQueryParams queryParams;
    public ListCompositionHookRequest withQueryParams(ListCompositionHookQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListCompositionHookSecurity security;
    public ListCompositionHookRequest withSecurity(ListCompositionHookSecurity security) {
        this.security = security;
        return this;
    }
}