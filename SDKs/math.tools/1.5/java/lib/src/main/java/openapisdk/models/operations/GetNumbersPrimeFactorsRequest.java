package openapisdk.models.operations;



public class GetNumbersPrimeFactorsRequest {
    public GetNumbersPrimeFactorsQueryParams queryParams;
    public GetNumbersPrimeFactorsRequest withQueryParams(GetNumbersPrimeFactorsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetNumbersPrimeFactorsSecurity security;
    public GetNumbersPrimeFactorsRequest withSecurity(GetNumbersPrimeFactorsSecurity security) {
        this.security = security;
        return this;
    }
}