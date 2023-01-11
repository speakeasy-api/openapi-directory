package openapisdk.models.operations;



public class MybusinessverificationsLocationsVerifyResponse {
    public String contentType;
    public MybusinessverificationsLocationsVerifyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MybusinessverificationsLocationsVerifyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VerifyLocationResponse verifyLocationResponse;
    public MybusinessverificationsLocationsVerifyResponse withVerifyLocationResponse(openapisdk.models.shared.VerifyLocationResponse verifyLocationResponse) {
        this.verifyLocationResponse = verifyLocationResponse;
        return this;
    }
}