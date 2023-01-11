package openapisdk.models.operations;



public class FilesDetailResponse {
    public byte[] body;
    public FilesDetailResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public FilesDetailResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FilesDetailResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}