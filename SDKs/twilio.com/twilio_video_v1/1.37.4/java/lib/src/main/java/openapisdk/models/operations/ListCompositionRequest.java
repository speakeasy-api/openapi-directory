package openapisdk.models.operations;



public class ListCompositionRequest {
    public String serverURL;
    public ListCompositionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListCompositionQueryParams queryParams;
    public ListCompositionRequest withQueryParams(ListCompositionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListCompositionSecurity security;
    public ListCompositionRequest withSecurity(ListCompositionSecurity security) {
        this.security = security;
        return this;
    }
}