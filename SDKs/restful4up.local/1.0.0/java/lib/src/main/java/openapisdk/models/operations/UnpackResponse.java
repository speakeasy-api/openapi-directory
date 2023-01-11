package openapisdk.models.operations;



public class UnpackResponse {
    public byte[] body;
    public UnpackResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UnpackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UnpackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public byte[] unpack200WildcardBinaryString;
    public UnpackResponse withUnpack200WildcardBinaryString(byte[] unpack200WildcardBinaryString) {
        this.unpack200WildcardBinaryString = unpack200WildcardBinaryString;
        return this;
    }
}