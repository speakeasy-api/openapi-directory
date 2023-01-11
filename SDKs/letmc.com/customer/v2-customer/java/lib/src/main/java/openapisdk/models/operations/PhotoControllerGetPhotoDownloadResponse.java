package openapisdk.models.operations;



public class PhotoControllerGetPhotoDownloadResponse {
    public byte[] body;
    public PhotoControllerGetPhotoDownloadResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PhotoControllerGetPhotoDownloadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> object;
    public PhotoControllerGetPhotoDownloadResponse withObject(java.util.Map<String, Object> object) {
        this.object = object;
        return this;
    }
    public Long statusCode;
    public PhotoControllerGetPhotoDownloadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}