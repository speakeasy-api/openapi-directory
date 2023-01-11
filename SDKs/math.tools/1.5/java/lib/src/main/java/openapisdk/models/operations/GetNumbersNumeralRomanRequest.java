package openapisdk.models.operations;



public class GetNumbersNumeralRomanRequest {
    public GetNumbersNumeralRomanQueryParams queryParams;
    public GetNumbersNumeralRomanRequest withQueryParams(GetNumbersNumeralRomanQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetNumbersNumeralRomanSecurity security;
    public GetNumbersNumeralRomanRequest withSecurity(GetNumbersNumeralRomanSecurity security) {
        this.security = security;
        return this;
    }
}