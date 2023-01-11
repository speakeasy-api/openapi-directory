package openapisdk.models.operations;



public class GetApplicationDocumentResponse {
    public openapisdk.models.shared.ApplicationDocumentResult applicationDocumentResult;
    public GetApplicationDocumentResponse withApplicationDocumentResult(openapisdk.models.shared.ApplicationDocumentResult applicationDocumentResult) {
        this.applicationDocumentResult = applicationDocumentResult;
        return this;
    }
    public String contentType;
    public GetApplicationDocumentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetApplicationDocumentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}