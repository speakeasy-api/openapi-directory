package openapisdk.models.operations;



public class CreateSyncSyncMapResponse {
    public String contentType;
    public CreateSyncSyncMapResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateSyncSyncMapResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewSyncServiceSyncMap previewSyncServiceSyncMap;
    public CreateSyncSyncMapResponse withPreviewSyncServiceSyncMap(openapisdk.models.shared.PreviewSyncServiceSyncMap previewSyncServiceSyncMap) {
        this.previewSyncServiceSyncMap = previewSyncServiceSyncMap;
        return this;
    }
}