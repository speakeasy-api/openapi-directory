package openapisdk.models.operations;



public class GetMeReputationResponse {
    public byte[] body;
    public GetMeReputationResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetMeReputationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetMeReputationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}