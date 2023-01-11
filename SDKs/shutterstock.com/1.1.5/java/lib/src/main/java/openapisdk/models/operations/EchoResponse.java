package openapisdk.models.operations;



public class EchoResponse {
    public String contentType;
    public EchoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EchoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TestEcho testEcho;
    public EchoResponse withTestEcho(openapisdk.models.shared.TestEcho testEcho) {
        this.testEcho = testEcho;
        return this;
    }
}