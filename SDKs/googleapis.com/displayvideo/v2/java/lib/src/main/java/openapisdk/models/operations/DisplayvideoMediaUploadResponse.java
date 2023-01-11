package openapisdk.models.operations;



public class DisplayvideoMediaUploadResponse {
    public String contentType;
    public DisplayvideoMediaUploadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleBytestreamMedia googleBytestreamMedia;
    public DisplayvideoMediaUploadResponse withGoogleBytestreamMedia(openapisdk.models.shared.GoogleBytestreamMedia googleBytestreamMedia) {
        this.googleBytestreamMedia = googleBytestreamMedia;
        return this;
    }
    public Long statusCode;
    public DisplayvideoMediaUploadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}