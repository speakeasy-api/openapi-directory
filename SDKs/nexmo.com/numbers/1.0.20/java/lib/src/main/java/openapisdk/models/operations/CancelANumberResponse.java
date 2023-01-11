package openapisdk.models.operations;



public class CancelANumberResponse {
    public byte[] body;
    public CancelANumberResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public CancelANumberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CancelANumberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Response response;
    public CancelANumberResponse withResponse(openapisdk.models.shared.Response response) {
        this.response = response;
        return this;
    }
    public openapisdk.models.shared.Unauthorized unauthorized;
    public CancelANumberResponse withUnauthorized(openapisdk.models.shared.Unauthorized unauthorized) {
        this.unauthorized = unauthorized;
        return this;
    }
}