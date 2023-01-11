package openapisdk.models.operations;



public class EurekaInfoResponse {
    public String contentType;
    public EurekaInfoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Example1 example1;
    public EurekaInfoResponse withExample1(openapisdk.models.shared.Example1 example1) {
        this.example1 = example1;
        return this;
    }
    public Long statusCode;
    public EurekaInfoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}