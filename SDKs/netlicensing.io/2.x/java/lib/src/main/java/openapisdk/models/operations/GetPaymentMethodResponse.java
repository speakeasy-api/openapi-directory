package openapisdk.models.operations;



public class GetPaymentMethodResponse {
    public byte[] body;
    public GetPaymentMethodResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetPaymentMethodResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPaymentMethodResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object netlicensing;
    public GetPaymentMethodResponse withNetlicensing(Object netlicensing) {
        this.netlicensing = netlicensing;
        return this;
    }
}