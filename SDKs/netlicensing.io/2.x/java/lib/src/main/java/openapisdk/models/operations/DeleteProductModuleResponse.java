package openapisdk.models.operations;



public class DeleteProductModuleResponse {
    public byte[] body;
    public DeleteProductModuleResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DeleteProductModuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteProductModuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object netlicensing;
    public DeleteProductModuleResponse withNetlicensing(Object netlicensing) {
        this.netlicensing = netlicensing;
        return this;
    }
}