package openapisdk.models.operations;



public class FilesPatchResponse {
    public String contentType;
    public FilesPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FilesPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}