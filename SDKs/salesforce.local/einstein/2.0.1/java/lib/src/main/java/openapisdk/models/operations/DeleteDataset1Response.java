package openapisdk.models.operations;



public class DeleteDataset1Response {
    public String contentType;
    public DeleteDataset1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeletionResponse deletionResponse;
    public DeleteDataset1Response withDeletionResponse(openapisdk.models.shared.DeletionResponse deletionResponse) {
        this.deletionResponse = deletionResponse;
        return this;
    }
    public Long statusCode;
    public DeleteDataset1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}