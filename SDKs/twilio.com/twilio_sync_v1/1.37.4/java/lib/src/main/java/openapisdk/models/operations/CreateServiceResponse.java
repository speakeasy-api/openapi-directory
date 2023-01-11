package openapisdk.models.operations;



public class CreateServiceResponse {
    public String contentType;
    public CreateServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SyncV1Service syncV1Service;
    public CreateServiceResponse withSyncV1Service(openapisdk.models.shared.SyncV1Service syncV1Service) {
        this.syncV1Service = syncV1Service;
        return this;
    }
}