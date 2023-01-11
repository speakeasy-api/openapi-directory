package openapisdk.models.operations;



public class CreateProductResponse {
    public byte[] body;
    public CreateProductResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public CreateProductResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateProductResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object netlicensing;
    public CreateProductResponse withNetlicensing(Object netlicensing) {
        this.netlicensing = netlicensing;
        return this;
    }
}