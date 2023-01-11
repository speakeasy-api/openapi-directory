package openapisdk.models.operations;



public class GetLabelByIdResponseOutput {
    public String contentType;
    public GetLabelByIdResponseOutput withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetLabelByIdResponseOutput withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public GetLabelByIdResponseOutput withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
    public openapisdk.models.shared.GetLabelByIdResponseBodyOutput getLabelByIdResponseBody;
    public GetLabelByIdResponseOutput withGetLabelByIdResponseBody(openapisdk.models.shared.GetLabelByIdResponseBodyOutput getLabelByIdResponseBody) {
        this.getLabelByIdResponseBody = getLabelByIdResponseBody;
        return this;
    }
}