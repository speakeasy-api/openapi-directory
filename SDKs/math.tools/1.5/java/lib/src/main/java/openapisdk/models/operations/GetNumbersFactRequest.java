package openapisdk.models.operations;



public class GetNumbersFactRequest {
    public GetNumbersFactQueryParams queryParams;
    public GetNumbersFactRequest withQueryParams(GetNumbersFactQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetNumbersFactSecurity security;
    public GetNumbersFactRequest withSecurity(GetNumbersFactSecurity security) {
        this.security = security;
        return this;
    }
}