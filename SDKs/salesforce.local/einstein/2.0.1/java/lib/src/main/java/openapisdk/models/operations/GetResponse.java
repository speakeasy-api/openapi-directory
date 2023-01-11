package openapisdk.models.operations;



public class GetResponse {
    public String contentType;
    public GetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeletionResponse deletionResponse;
    public GetResponse withDeletionResponse(openapisdk.models.shared.DeletionResponse deletionResponse) {
        this.deletionResponse = deletionResponse;
        return this;
    }
    public Long statusCode;
    public GetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}