package openapisdk.models.operations;



public class EditApplicationDocumentResponse {
    public openapisdk.models.shared.ApplicationDocumentResult applicationDocumentResult;
    public EditApplicationDocumentResponse withApplicationDocumentResult(openapisdk.models.shared.ApplicationDocumentResult applicationDocumentResult) {
        this.applicationDocumentResult = applicationDocumentResult;
        return this;
    }
    public String contentType;
    public EditApplicationDocumentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EditApplicationDocumentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}