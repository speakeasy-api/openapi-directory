package openapisdk.models.operations;



public class GetSyncResponse {
    public String contentType;
    public GetSyncResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSyncResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.GetSyncResponse getSyncResponse;
    public GetSyncResponse withGetSyncResponse(openapisdk.models.shared.GetSyncResponse getSyncResponse) {
        this.getSyncResponse = getSyncResponse;
        return this;
    }
}