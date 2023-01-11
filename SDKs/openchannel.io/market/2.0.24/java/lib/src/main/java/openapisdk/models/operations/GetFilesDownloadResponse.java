package openapisdk.models.operations;



public class GetFilesDownloadResponse {
    public byte[] body;
    public GetFilesDownloadResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetFilesDownloadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetFilesDownloadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}