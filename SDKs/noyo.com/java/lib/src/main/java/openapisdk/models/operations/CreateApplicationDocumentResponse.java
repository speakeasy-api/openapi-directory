package openapisdk.models.operations;



public class CreateApplicationDocumentResponse {
    public openapisdk.models.shared.ApplicationDocumentResult applicationDocumentResult;
    public CreateApplicationDocumentResponse withApplicationDocumentResult(openapisdk.models.shared.ApplicationDocumentResult applicationDocumentResult) {
        this.applicationDocumentResult = applicationDocumentResult;
        return this;
    }
    public String contentType;
    public CreateApplicationDocumentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateApplicationDocumentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}