package openapisdk.models.operations;



public class PostSpinsResponse {
    public byte[] body;
    public PostSpinsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostSpinsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public PostSpinsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.Spin spin;
    public PostSpinsResponse withSpin(openapisdk.models.shared.Spin spin) {
        this.spin = spin;
        return this;
    }
    public Long statusCode;
    public PostSpinsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationError[] validationErrors;
    public PostSpinsResponse withValidationErrors(openapisdk.models.shared.ValidationError[] validationErrors) {
        this.validationErrors = validationErrors;
        return this;
    }
}