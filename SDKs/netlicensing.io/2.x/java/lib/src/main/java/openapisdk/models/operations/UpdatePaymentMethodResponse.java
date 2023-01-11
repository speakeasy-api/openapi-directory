package openapisdk.models.operations;



public class UpdatePaymentMethodResponse {
    public byte[] body;
    public UpdatePaymentMethodResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UpdatePaymentMethodResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdatePaymentMethodResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object netlicensing;
    public UpdatePaymentMethodResponse withNetlicensing(Object netlicensing) {
        this.netlicensing = netlicensing;
        return this;
    }
}