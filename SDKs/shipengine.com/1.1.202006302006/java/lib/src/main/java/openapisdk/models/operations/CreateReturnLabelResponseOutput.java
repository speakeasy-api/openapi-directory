package openapisdk.models.operations;



public class CreateReturnLabelResponseOutput {
    public String contentType;
    public CreateReturnLabelResponseOutput withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateReturnLabelResponseOutput withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.CreateReturnLabelResponseBodyOutput createReturnLabelResponseBody;
    public CreateReturnLabelResponseOutput withCreateReturnLabelResponseBody(openapisdk.models.shared.CreateReturnLabelResponseBodyOutput createReturnLabelResponseBody) {
        this.createReturnLabelResponseBody = createReturnLabelResponseBody;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public CreateReturnLabelResponseOutput withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
}