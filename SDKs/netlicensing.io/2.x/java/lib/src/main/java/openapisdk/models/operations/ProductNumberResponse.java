package openapisdk.models.operations;



public class ProductNumberResponse {
    public byte[] body;
    public ProductNumberResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ProductNumberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProductNumberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object netlicensing;
    public ProductNumberResponse withNetlicensing(Object netlicensing) {
        this.netlicensing = netlicensing;
        return this;
    }
}