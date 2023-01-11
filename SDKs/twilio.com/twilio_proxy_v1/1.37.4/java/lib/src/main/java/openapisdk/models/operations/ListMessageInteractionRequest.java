package openapisdk.models.operations;



public class ListMessageInteractionRequest {
    public String serverURL;
    public ListMessageInteractionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListMessageInteractionPathParams pathParams;
    public ListMessageInteractionRequest withPathParams(ListMessageInteractionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListMessageInteractionQueryParams queryParams;
    public ListMessageInteractionRequest withQueryParams(ListMessageInteractionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListMessageInteractionSecurity security;
    public ListMessageInteractionRequest withSecurity(ListMessageInteractionSecurity security) {
        this.security = security;
        return this;
    }
}