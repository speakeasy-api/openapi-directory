package openapisdk.models.operations;



public class GetNumbersCardinalRequest {
    public GetNumbersCardinalQueryParams queryParams;
    public GetNumbersCardinalRequest withQueryParams(GetNumbersCardinalQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetNumbersCardinalSecurity security;
    public GetNumbersCardinalRequest withSecurity(GetNumbersCardinalSecurity security) {
        this.security = security;
        return this;
    }
}