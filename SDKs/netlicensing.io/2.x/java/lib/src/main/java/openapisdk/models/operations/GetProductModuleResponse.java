package openapisdk.models.operations;



public class GetProductModuleResponse {
    public byte[] body;
    public GetProductModuleResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetProductModuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetProductModuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object netlicensing;
    public GetProductModuleResponse withNetlicensing(Object netlicensing) {
        this.netlicensing = netlicensing;
        return this;
    }
}