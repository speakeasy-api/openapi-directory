package openapisdk.models.operations;



public class CreateDocumentSubmissionResponse {
    public String contentType;
    public CreateDocumentSubmissionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DocumentSubmissionResult documentSubmissionResult;
    public CreateDocumentSubmissionResponse withDocumentSubmissionResult(openapisdk.models.shared.DocumentSubmissionResult documentSubmissionResult) {
        this.documentSubmissionResult = documentSubmissionResult;
        return this;
    }
    public Object[] errorModels;
    public CreateDocumentSubmissionResponse withErrorModels(Object[] errorModels) {
        this.errorModels = errorModels;
        return this;
    }
    public Long statusCode;
    public CreateDocumentSubmissionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}