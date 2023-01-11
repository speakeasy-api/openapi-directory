package openapisdk.models.operations;



public class ListPaymentMethodsResponse {
    public byte[] body;
    public ListPaymentMethodsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ListPaymentMethodsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListPaymentMethodsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object[] netlicensings;
    public ListPaymentMethodsResponse withNetlicensings(Object[] netlicensings) {
        this.netlicensings = netlicensings;
        return this;
    }
}