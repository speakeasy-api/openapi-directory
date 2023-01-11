package openapisdk.models.operations;



public class GetEndpointsResponse {
    public String contentType;
    public GetEndpointsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetEndpointsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Endpoint endpoint;
    public GetEndpointsResponse withEndpoint(openapisdk.models.shared.Endpoint endpoint) {
        this.endpoint = endpoint;
        return this;
    }
}