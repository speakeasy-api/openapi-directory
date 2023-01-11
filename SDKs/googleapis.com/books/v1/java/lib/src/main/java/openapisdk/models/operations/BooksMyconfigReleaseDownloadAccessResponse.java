package openapisdk.models.operations;



public class BooksMyconfigReleaseDownloadAccessResponse {
    public String contentType;
    public BooksMyconfigReleaseDownloadAccessResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DownloadAccesses downloadAccesses;
    public BooksMyconfigReleaseDownloadAccessResponse withDownloadAccesses(openapisdk.models.shared.DownloadAccesses downloadAccesses) {
        this.downloadAccesses = downloadAccesses;
        return this;
    }
    public Long statusCode;
    public BooksMyconfigReleaseDownloadAccessResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}