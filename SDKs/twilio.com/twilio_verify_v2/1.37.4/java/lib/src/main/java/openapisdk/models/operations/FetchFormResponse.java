package openapisdk.models.operations;



public class FetchFormResponse {
    public String contentType;
    public FetchFormResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchFormResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VerifyV2Form verifyV2Form;
    public FetchFormResponse withVerifyV2Form(openapisdk.models.shared.VerifyV2Form verifyV2Form) {
        this.verifyV2Form = verifyV2Form;
        return this;
    }
}