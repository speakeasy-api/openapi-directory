package openapisdk.models.operations;



public class ListInteractionRequest {
    public String serverURL;
    public ListInteractionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListInteractionPathParams pathParams;
    public ListInteractionRequest withPathParams(ListInteractionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListInteractionQueryParams queryParams;
    public ListInteractionRequest withQueryParams(ListInteractionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListInteractionSecurity security;
    public ListInteractionRequest withSecurity(ListInteractionSecurity security) {
        this.security = security;
        return this;
    }
}