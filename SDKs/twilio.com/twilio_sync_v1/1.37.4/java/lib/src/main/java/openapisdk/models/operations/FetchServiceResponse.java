package openapisdk.models.operations;



public class FetchServiceResponse {
    public String contentType;
    public FetchServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SyncV1Service syncV1Service;
    public FetchServiceResponse withSyncV1Service(openapisdk.models.shared.SyncV1Service syncV1Service) {
        this.syncV1Service = syncV1Service;
        return this;
    }
}