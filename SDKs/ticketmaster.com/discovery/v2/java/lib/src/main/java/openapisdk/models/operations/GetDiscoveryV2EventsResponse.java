package openapisdk.models.operations;



public class GetDiscoveryV2EventsResponse {
    public byte[] body;
    public GetDiscoveryV2EventsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDiscoveryV2EventsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDiscoveryV2EventsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}