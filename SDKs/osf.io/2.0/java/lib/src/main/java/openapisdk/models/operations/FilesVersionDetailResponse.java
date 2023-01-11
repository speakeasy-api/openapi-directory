package openapisdk.models.operations;



public class FilesVersionDetailResponse {
    public byte[] body;
    public FilesVersionDetailResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public FilesVersionDetailResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FilesVersionDetailResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}