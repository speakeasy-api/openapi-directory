package openapisdk.models.operations;



public class GetNumbersOrdinalRequest {
    public GetNumbersOrdinalQueryParams queryParams;
    public GetNumbersOrdinalRequest withQueryParams(GetNumbersOrdinalQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetNumbersOrdinalSecurity security;
    public GetNumbersOrdinalRequest withSecurity(GetNumbersOrdinalSecurity security) {
        this.security = security;
        return this;
    }
}