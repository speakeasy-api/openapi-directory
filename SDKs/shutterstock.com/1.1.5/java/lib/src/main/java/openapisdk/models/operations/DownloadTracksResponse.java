package openapisdk.models.operations;



public class DownloadTracksResponse {
    public String contentType;
    public DownloadTracksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DownloadTracksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Url url;
    public DownloadTracksResponse withUrl(openapisdk.models.shared.Url url) {
        this.url = url;
        return this;
    }
}