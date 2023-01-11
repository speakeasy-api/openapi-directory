package openapisdk.models.operations;



public class CreateSyncSyncMapItemResponse {
    public String contentType;
    public CreateSyncSyncMapItemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateSyncSyncMapItemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewSyncServiceSyncMapSyncMapItem previewSyncServiceSyncMapSyncMapItem;
    public CreateSyncSyncMapItemResponse withPreviewSyncServiceSyncMapSyncMapItem(openapisdk.models.shared.PreviewSyncServiceSyncMapSyncMapItem previewSyncServiceSyncMapSyncMapItem) {
        this.previewSyncServiceSyncMapSyncMapItem = previewSyncServiceSyncMapSyncMapItem;
        return this;
    }
}