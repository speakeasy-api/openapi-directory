package openapisdk.models.operations;



public class CloudsupportMediaDownloadResponse {
    public String contentType;
    public CloudsupportMediaDownloadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Media media;
    public CloudsupportMediaDownloadResponse withMedia(openapisdk.models.shared.Media media) {
        this.media = media;
        return this;
    }
    public Long statusCode;
    public CloudsupportMediaDownloadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}