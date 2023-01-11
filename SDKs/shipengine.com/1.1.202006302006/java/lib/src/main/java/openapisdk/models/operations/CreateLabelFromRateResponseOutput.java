package openapisdk.models.operations;



public class CreateLabelFromRateResponseOutput {
    public String contentType;
    public CreateLabelFromRateResponseOutput withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateLabelFromRateResponseOutput withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.CreateLabelFromRateResponseBodyOutput createLabelFromRateResponseBody;
    public CreateLabelFromRateResponseOutput withCreateLabelFromRateResponseBody(openapisdk.models.shared.CreateLabelFromRateResponseBodyOutput createLabelFromRateResponseBody) {
        this.createLabelFromRateResponseBody = createLabelFromRateResponseBody;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public CreateLabelFromRateResponseOutput withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
}