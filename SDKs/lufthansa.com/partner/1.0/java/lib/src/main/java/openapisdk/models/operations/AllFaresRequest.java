package openapisdk.models.operations;



public class AllFaresRequest {
    public AllFaresQueryParams queryParams;
    public AllFaresRequest withQueryParams(AllFaresQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AllFaresHeaders headers;
    public AllFaresRequest withHeaders(AllFaresHeaders headers) {
        this.headers = headers;
        return this;
    }
    public AllFaresSecurity security;
    public AllFaresRequest withSecurity(AllFaresSecurity security) {
        this.security = security;
        return this;
    }
}