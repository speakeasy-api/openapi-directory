package openapisdk.models.operations;



public class CreateProductModuleResponse {
    public byte[] body;
    public CreateProductModuleResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public CreateProductModuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateProductModuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object netlicensing;
    public CreateProductModuleResponse withNetlicensing(Object netlicensing) {
        this.netlicensing = netlicensing;
        return this;
    }
}