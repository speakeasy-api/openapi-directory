package openapisdk.models.operations;



public class MybusinessAccountsLocationsFetchVerificationOptionsResponse {
    public String contentType;
    public MybusinessAccountsLocationsFetchVerificationOptionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FetchVerificationOptionsResponse fetchVerificationOptionsResponse;
    public MybusinessAccountsLocationsFetchVerificationOptionsResponse withFetchVerificationOptionsResponse(openapisdk.models.shared.FetchVerificationOptionsResponse fetchVerificationOptionsResponse) {
        this.fetchVerificationOptionsResponse = fetchVerificationOptionsResponse;
        return this;
    }
    public Long statusCode;
    public MybusinessAccountsLocationsFetchVerificationOptionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}