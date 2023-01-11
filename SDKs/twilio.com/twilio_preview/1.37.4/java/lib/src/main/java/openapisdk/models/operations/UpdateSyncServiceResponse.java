package openapisdk.models.operations;



public class UpdateSyncServiceResponse {
    public String contentType;
    public UpdateSyncServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateSyncServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewSyncService previewSyncService;
    public UpdateSyncServiceResponse withPreviewSyncService(openapisdk.models.shared.PreviewSyncService previewSyncService) {
        this.previewSyncService = previewSyncService;
        return this;
    }
}