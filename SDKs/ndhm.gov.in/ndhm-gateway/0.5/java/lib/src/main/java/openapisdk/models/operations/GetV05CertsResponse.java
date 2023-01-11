package openapisdk.models.operations;



public class GetV05CertsResponse {
    public byte[] body;
    public GetV05CertsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public openapisdk.models.shared.Certs certs;
    public GetV05CertsResponse withCerts(openapisdk.models.shared.Certs certs) {
        this.certs = certs;
        return this;
    }
    public String contentType;
    public GetV05CertsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetV05CertsResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetV05CertsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}