package openapisdk.models.operations;



public class PubsubTopicsGetRequest {
    public PubsubTopicsGetPathParams pathParams;
    public PubsubTopicsGetRequest withPathParams(PubsubTopicsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PubsubTopicsGetQueryParams queryParams;
    public PubsubTopicsGetRequest withQueryParams(PubsubTopicsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PubsubTopicsGetSecurity security;
    public PubsubTopicsGetRequest withSecurity(PubsubTopicsGetSecurity security) {
        this.security = security;
        return this;
    }
}