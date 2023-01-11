package openapisdk.models.operations;



public class TrafficdirectorDiscoveryClientStatusResponse {
    public openapisdk.models.shared.ClientStatusResponse clientStatusResponse;
    public TrafficdirectorDiscoveryClientStatusResponse withClientStatusResponse(openapisdk.models.shared.ClientStatusResponse clientStatusResponse) {
        this.clientStatusResponse = clientStatusResponse;
        return this;
    }
    public String contentType;
    public TrafficdirectorDiscoveryClientStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TrafficdirectorDiscoveryClientStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}