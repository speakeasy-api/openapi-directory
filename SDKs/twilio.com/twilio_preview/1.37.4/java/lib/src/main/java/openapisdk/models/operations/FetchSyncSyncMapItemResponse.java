package openapisdk.models.operations;



public class FetchSyncSyncMapItemResponse {
    public String contentType;
    public FetchSyncSyncMapItemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchSyncSyncMapItemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewSyncServiceSyncMapSyncMapItem previewSyncServiceSyncMapSyncMapItem;
    public FetchSyncSyncMapItemResponse withPreviewSyncServiceSyncMapSyncMapItem(openapisdk.models.shared.PreviewSyncServiceSyncMapSyncMapItem previewSyncServiceSyncMapSyncMapItem) {
        this.previewSyncServiceSyncMapSyncMapItem = previewSyncServiceSyncMapSyncMapItem;
        return this;
    }
}