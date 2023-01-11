package openapisdk.models.operations;



public class GetNumbersPrimeIsFibonacciPrimeRequest {
    public GetNumbersPrimeIsFibonacciPrimeQueryParams queryParams;
    public GetNumbersPrimeIsFibonacciPrimeRequest withQueryParams(GetNumbersPrimeIsFibonacciPrimeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetNumbersPrimeIsFibonacciPrimeSecurity security;
    public GetNumbersPrimeIsFibonacciPrimeRequest withSecurity(GetNumbersPrimeIsFibonacciPrimeSecurity security) {
        this.security = security;
        return this;
    }
}