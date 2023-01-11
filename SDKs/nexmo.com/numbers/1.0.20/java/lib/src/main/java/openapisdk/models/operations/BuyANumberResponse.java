package openapisdk.models.operations;



public class BuyANumberResponse {
    public byte[] body;
    public BuyANumberResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public BuyANumberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BuyANumberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Response response;
    public BuyANumberResponse withResponse(openapisdk.models.shared.Response response) {
        this.response = response;
        return this;
    }
    public openapisdk.models.shared.Response420 response420;
    public BuyANumberResponse withResponse420(openapisdk.models.shared.Response420 response420) {
        this.response420 = response420;
        return this;
    }
    public openapisdk.models.shared.Unauthorized unauthorized;
    public BuyANumberResponse withUnauthorized(openapisdk.models.shared.Unauthorized unauthorized) {
        this.unauthorized = unauthorized;
        return this;
    }
}