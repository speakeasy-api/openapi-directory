package openapisdk.models.operations;



public class ValidateResponse {
    public String contentType;
    public ValidateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ValidateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TestValidate testValidate;
    public ValidateResponse withTestValidate(openapisdk.models.shared.TestValidate testValidate) {
        this.testValidate = testValidate;
        return this;
    }
}