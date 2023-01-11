package openapisdk.models.operations;



public class MybusinessverificationsLocationsFetchVerificationOptionsResponse {
    public String contentType;
    public MybusinessverificationsLocationsFetchVerificationOptionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FetchVerificationOptionsResponse fetchVerificationOptionsResponse;
    public MybusinessverificationsLocationsFetchVerificationOptionsResponse withFetchVerificationOptionsResponse(openapisdk.models.shared.FetchVerificationOptionsResponse fetchVerificationOptionsResponse) {
        this.fetchVerificationOptionsResponse = fetchVerificationOptionsResponse;
        return this;
    }
    public Long statusCode;
    public MybusinessverificationsLocationsFetchVerificationOptionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}