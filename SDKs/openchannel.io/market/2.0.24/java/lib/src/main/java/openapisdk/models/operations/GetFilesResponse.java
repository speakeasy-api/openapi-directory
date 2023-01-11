package openapisdk.models.operations;



public class GetFilesResponse {
    public byte[] body;
    public GetFilesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetFilesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetFilesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}