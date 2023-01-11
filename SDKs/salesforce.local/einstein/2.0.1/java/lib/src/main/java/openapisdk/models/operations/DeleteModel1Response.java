package openapisdk.models.operations;



public class DeleteModel1Response {
    public String contentType;
    public DeleteModel1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeletionResponse deletionResponse;
    public DeleteModel1Response withDeletionResponse(openapisdk.models.shared.DeletionResponse deletionResponse) {
        this.deletionResponse = deletionResponse;
        return this;
    }
    public Long statusCode;
    public DeleteModel1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}