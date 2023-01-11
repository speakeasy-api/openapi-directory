package openapisdk.models.operations;



public class PubsubTopicsListRequest {
    public PubsubTopicsListQueryParams queryParams;
    public PubsubTopicsListRequest withQueryParams(PubsubTopicsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PubsubTopicsListSecurity security;
    public PubsubTopicsListRequest withSecurity(PubsubTopicsListSecurity security) {
        this.security = security;
        return this;
    }
}