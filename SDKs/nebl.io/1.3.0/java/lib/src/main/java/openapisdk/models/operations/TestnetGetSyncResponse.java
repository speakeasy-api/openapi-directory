package openapisdk.models.operations;



public class TestnetGetSyncResponse {
    public String contentType;
    public TestnetGetSyncResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TestnetGetSyncResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.GetSyncResponse getSyncResponse;
    public TestnetGetSyncResponse withGetSyncResponse(openapisdk.models.shared.GetSyncResponse getSyncResponse) {
        this.getSyncResponse = getSyncResponse;
        return this;
    }
}