package openapisdk.models.operations;



public class GetNumbersIsPalindromeRequest {
    public GetNumbersIsPalindromeQueryParams queryParams;
    public GetNumbersIsPalindromeRequest withQueryParams(GetNumbersIsPalindromeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetNumbersIsPalindromeSecurity security;
    public GetNumbersIsPalindromeRequest withSecurity(GetNumbersIsPalindromeSecurity security) {
        this.security = security;
        return this;
    }
}