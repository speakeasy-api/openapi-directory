package openapisdk.models.operations;



public class UpdateSyncSyncMapItemResponse {
    public String contentType;
    public UpdateSyncSyncMapItemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateSyncSyncMapItemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewSyncServiceSyncMapSyncMapItem previewSyncServiceSyncMapSyncMapItem;
    public UpdateSyncSyncMapItemResponse withPreviewSyncServiceSyncMapSyncMapItem(openapisdk.models.shared.PreviewSyncServiceSyncMapSyncMapItem previewSyncServiceSyncMapSyncMapItem) {
        this.previewSyncServiceSyncMapSyncMapItem = previewSyncServiceSyncMapSyncMapItem;
        return this;
    }
}