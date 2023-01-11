package openapisdk.models.operations;



public class GetNumbersPrimeIsPrimeRequest {
    public GetNumbersPrimeIsPrimeQueryParams queryParams;
    public GetNumbersPrimeIsPrimeRequest withQueryParams(GetNumbersPrimeIsPrimeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetNumbersPrimeIsPrimeSecurity security;
    public GetNumbersPrimeIsPrimeRequest withSecurity(GetNumbersPrimeIsPrimeSecurity security) {
        this.security = security;
        return this;
    }
}