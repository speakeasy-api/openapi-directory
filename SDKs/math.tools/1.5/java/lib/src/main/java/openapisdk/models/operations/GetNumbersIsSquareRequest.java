package openapisdk.models.operations;



public class GetNumbersIsSquareRequest {
    public GetNumbersIsSquareQueryParams queryParams;
    public GetNumbersIsSquareRequest withQueryParams(GetNumbersIsSquareQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetNumbersIsSquareSecurity security;
    public GetNumbersIsSquareRequest withSecurity(GetNumbersIsSquareSecurity security) {
        this.security = security;
        return this;
    }
}