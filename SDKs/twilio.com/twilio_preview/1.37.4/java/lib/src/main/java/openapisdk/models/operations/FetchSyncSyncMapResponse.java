package openapisdk.models.operations;



public class FetchSyncSyncMapResponse {
    public String contentType;
    public FetchSyncSyncMapResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchSyncSyncMapResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewSyncServiceSyncMap previewSyncServiceSyncMap;
    public FetchSyncSyncMapResponse withPreviewSyncServiceSyncMap(openapisdk.models.shared.PreviewSyncServiceSyncMap previewSyncServiceSyncMap) {
        this.previewSyncServiceSyncMap = previewSyncServiceSyncMap;
        return this;
    }
}