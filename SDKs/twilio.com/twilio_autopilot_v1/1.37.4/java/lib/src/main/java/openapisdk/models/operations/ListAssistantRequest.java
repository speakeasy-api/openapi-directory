package openapisdk.models.operations;



public class ListAssistantRequest {
    public String serverURL;
    public ListAssistantRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListAssistantQueryParams queryParams;
    public ListAssistantRequest withQueryParams(ListAssistantQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAssistantSecurity security;
    public ListAssistantRequest withSecurity(ListAssistantSecurity security) {
        this.security = security;
        return this;
    }
}