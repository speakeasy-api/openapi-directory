package openapisdk.models.operations;



public class SubmitApplicationDocumentResponse {
    public openapisdk.models.shared.ApplicationDocumentResult applicationDocumentResult;
    public SubmitApplicationDocumentResponse withApplicationDocumentResult(openapisdk.models.shared.ApplicationDocumentResult applicationDocumentResult) {
        this.applicationDocumentResult = applicationDocumentResult;
        return this;
    }
    public String contentType;
    public SubmitApplicationDocumentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SubmitApplicationDocumentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}