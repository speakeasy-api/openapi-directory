package openapisdk.models.operations;



public class YoutubereportingMediaDownloadResponse {
    public String contentType;
    public YoutubereportingMediaDownloadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GdataMedia gdataMedia;
    public YoutubereportingMediaDownloadResponse withGdataMedia(openapisdk.models.shared.GdataMedia gdataMedia) {
        this.gdataMedia = gdataMedia;
        return this;
    }
    public Long statusCode;
    public YoutubereportingMediaDownloadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}