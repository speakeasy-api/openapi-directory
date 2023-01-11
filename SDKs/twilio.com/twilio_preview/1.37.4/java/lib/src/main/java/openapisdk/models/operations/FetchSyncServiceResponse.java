package openapisdk.models.operations;



public class FetchSyncServiceResponse {
    public String contentType;
    public FetchSyncServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchSyncServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewSyncService previewSyncService;
    public FetchSyncServiceResponse withPreviewSyncService(openapisdk.models.shared.PreviewSyncService previewSyncService) {
        this.previewSyncService = previewSyncService;
        return this;
    }
}