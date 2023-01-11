package openapisdk.models.operations;



public class DownloadProjectDocumentResponse {
    public String contentType;
    public DownloadProjectDocumentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public DownloadProjectDocumentResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public DownloadProjectDocumentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String downloadProjectDocument200ApplicationJSONString;
    public DownloadProjectDocumentResponse withDownloadProjectDocument200ApplicationJsonString(String downloadProjectDocument200ApplicationJSONString) {
        this.downloadProjectDocument200ApplicationJSONString = downloadProjectDocument200ApplicationJSONString;
        return this;
    }
}