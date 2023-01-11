package openapisdk.models.operations;



public class Get1Response {
    public String contentType;
    public Get1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeletionResponse deletionResponse;
    public Get1Response withDeletionResponse(openapisdk.models.shared.DeletionResponse deletionResponse) {
        this.deletionResponse = deletionResponse;
        return this;
    }
    public Long statusCode;
    public Get1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}