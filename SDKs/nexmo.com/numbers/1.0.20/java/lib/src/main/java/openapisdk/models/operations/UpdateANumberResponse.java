package openapisdk.models.operations;



public class UpdateANumberResponse {
    public byte[] body;
    public UpdateANumberResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UpdateANumberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateANumberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Response response;
    public UpdateANumberResponse withResponse(openapisdk.models.shared.Response response) {
        this.response = response;
        return this;
    }
    public openapisdk.models.shared.Unauthorized unauthorized;
    public UpdateANumberResponse withUnauthorized(openapisdk.models.shared.Unauthorized unauthorized) {
        this.unauthorized = unauthorized;
        return this;
    }
}