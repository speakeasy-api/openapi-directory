package openapisdk.models.operations;



public class UpdateServiceResponse {
    public String contentType;
    public UpdateServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SyncV1Service syncV1Service;
    public UpdateServiceResponse withSyncV1Service(openapisdk.models.shared.SyncV1Service syncV1Service) {
        this.syncV1Service = syncV1Service;
        return this;
    }
}