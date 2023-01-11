package openapisdk.models.operations;



public class CreateSyncServiceResponse {
    public String contentType;
    public CreateSyncServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateSyncServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewSyncService previewSyncService;
    public CreateSyncServiceResponse withPreviewSyncService(openapisdk.models.shared.PreviewSyncService previewSyncService) {
        this.previewSyncService = previewSyncService;
        return this;
    }
}