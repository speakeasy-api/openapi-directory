package openapisdk.models.operations;



public class ListUnderstandAssistantRequest {
    public String serverURL;
    public ListUnderstandAssistantRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListUnderstandAssistantQueryParams queryParams;
    public ListUnderstandAssistantRequest withQueryParams(ListUnderstandAssistantQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListUnderstandAssistantSecurity security;
    public ListUnderstandAssistantRequest withSecurity(ListUnderstandAssistantSecurity security) {
        this.security = security;
        return this;
    }
}