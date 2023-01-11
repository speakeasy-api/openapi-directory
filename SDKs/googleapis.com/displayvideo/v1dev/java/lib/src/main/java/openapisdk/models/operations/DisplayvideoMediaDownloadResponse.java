package openapisdk.models.operations;



public class DisplayvideoMediaDownloadResponse {
    public String contentType;
    public DisplayvideoMediaDownloadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleBytestreamMedia googleBytestreamMedia;
    public DisplayvideoMediaDownloadResponse withGoogleBytestreamMedia(openapisdk.models.shared.GoogleBytestreamMedia googleBytestreamMedia) {
        this.googleBytestreamMedia = googleBytestreamMedia;
        return this;
    }
    public Long statusCode;
    public DisplayvideoMediaDownloadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}