package openapisdk.models.operations;



public class GetSpinsIdResponse {
    public byte[] body;
    public GetSpinsIdResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetSpinsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetSpinsIdResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.Spin spin;
    public GetSpinsIdResponse withSpin(openapisdk.models.shared.Spin spin) {
        this.spin = spin;
        return this;
    }
    public Long statusCode;
    public GetSpinsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}