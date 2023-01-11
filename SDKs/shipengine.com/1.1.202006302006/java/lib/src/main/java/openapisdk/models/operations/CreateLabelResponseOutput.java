package openapisdk.models.operations;



public class CreateLabelResponseOutput {
    public String contentType;
    public CreateLabelResponseOutput withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateLabelResponseOutput withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.CreateLabelResponseBodyOutput createLabelResponseBody;
    public CreateLabelResponseOutput withCreateLabelResponseBody(openapisdk.models.shared.CreateLabelResponseBodyOutput createLabelResponseBody) {
        this.createLabelResponseBody = createLabelResponseBody;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public CreateLabelResponseOutput withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
}