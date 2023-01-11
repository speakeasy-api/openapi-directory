package openapisdk.models.operations;



public class GetNumbersRandomRequest {
    public GetNumbersRandomQueryParams queryParams;
    public GetNumbersRandomRequest withQueryParams(GetNumbersRandomQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetNumbersRandomSecurity security;
    public GetNumbersRandomRequest withSecurity(GetNumbersRandomSecurity security) {
        this.security = security;
        return this;
    }
}