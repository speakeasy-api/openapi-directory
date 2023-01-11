package openapisdk.models.operations;



public class GetNumbersCurrencyRequest {
    public GetNumbersCurrencyQueryParams queryParams;
    public GetNumbersCurrencyRequest withQueryParams(GetNumbersCurrencyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetNumbersCurrencySecurity security;
    public GetNumbersCurrencyRequest withSecurity(GetNumbersCurrencySecurity security) {
        this.security = security;
        return this;
    }
}