package openapisdk.models.operations;



public class GetOneApplicationResponse {
    public byte[] body;
    public GetOneApplicationResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetOneApplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetOneApplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}