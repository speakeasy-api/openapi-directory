package openapisdk.models.operations;



public class GetQuoteRandomRequest {
    public GetQuoteRandomQueryParams queryParams;
    public GetQuoteRandomRequest withQueryParams(GetQuoteRandomQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetQuoteRandomSecurity security;
    public GetQuoteRandomRequest withSecurity(GetQuoteRandomSecurity security) {
        this.security = security;
        return this;
    }
}