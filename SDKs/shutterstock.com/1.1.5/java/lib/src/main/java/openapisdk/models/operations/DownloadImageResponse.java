package openapisdk.models.operations;



public class DownloadImageResponse {
    public String contentType;
    public DownloadImageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DownloadImageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Url url;
    public DownloadImageResponse withUrl(openapisdk.models.shared.Url url) {
        this.url = url;
        return this;
    }
}