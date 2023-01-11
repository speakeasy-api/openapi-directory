package openapisdk.models.operations;



public class MybusinessAccountsLocationsVerifyResponse {
    public String contentType;
    public MybusinessAccountsLocationsVerifyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MybusinessAccountsLocationsVerifyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VerifyLocationResponse verifyLocationResponse;
    public MybusinessAccountsLocationsVerifyResponse withVerifyLocationResponse(openapisdk.models.shared.VerifyLocationResponse verifyLocationResponse) {
        this.verifyLocationResponse = verifyLocationResponse;
        return this;
    }
}