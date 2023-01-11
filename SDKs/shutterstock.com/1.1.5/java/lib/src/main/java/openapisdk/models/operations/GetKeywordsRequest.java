package openapisdk.models.operations;



public class GetKeywordsRequest {
    public GetKeywordsQueryParams queryParams;
    public GetKeywordsRequest withQueryParams(GetKeywordsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetKeywordsSecurity security;
    public GetKeywordsRequest withSecurity(GetKeywordsSecurity security) {
        this.security = security;
        return this;
    }
}