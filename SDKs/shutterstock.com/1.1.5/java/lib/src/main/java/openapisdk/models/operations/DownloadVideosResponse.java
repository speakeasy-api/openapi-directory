package openapisdk.models.operations;



public class DownloadVideosResponse {
    public String contentType;
    public DownloadVideosResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DownloadVideosResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Url url;
    public DownloadVideosResponse withUrl(openapisdk.models.shared.Url url) {
        this.url = url;
        return this;
    }
}