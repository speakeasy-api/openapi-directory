package openapisdk.models.operations;



public class DeepLinksRequest {
    public DeepLinksQueryParams queryParams;
    public DeepLinksRequest withQueryParams(DeepLinksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeepLinksHeaders headers;
    public DeepLinksRequest withHeaders(DeepLinksHeaders headers) {
        this.headers = headers;
        return this;
    }
    public DeepLinksSecurity security;
    public DeepLinksRequest withSecurity(DeepLinksSecurity security) {
        this.security = security;
        return this;
    }
}