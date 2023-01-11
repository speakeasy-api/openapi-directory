package openapisdk.models.operations;



public class FilesVersionsResponse {
    public byte[] body;
    public FilesVersionsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public FilesVersionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FilesVersionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}