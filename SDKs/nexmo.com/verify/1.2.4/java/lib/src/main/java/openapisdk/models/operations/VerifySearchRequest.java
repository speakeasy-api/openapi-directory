package openapisdk.models.operations;



public class VerifySearchRequest {
    public VerifySearchPathParams pathParams;
    public VerifySearchRequest withPathParams(VerifySearchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public VerifySearchQueryParams queryParams;
    public VerifySearchRequest withQueryParams(VerifySearchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}