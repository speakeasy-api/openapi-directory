package openapisdk.models.operations;



public class PubsubTopicsDeleteRequest {
    public PubsubTopicsDeletePathParams pathParams;
    public PubsubTopicsDeleteRequest withPathParams(PubsubTopicsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PubsubTopicsDeleteQueryParams queryParams;
    public PubsubTopicsDeleteRequest withQueryParams(PubsubTopicsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PubsubTopicsDeleteSecurity security;
    public PubsubTopicsDeleteRequest withSecurity(PubsubTopicsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}