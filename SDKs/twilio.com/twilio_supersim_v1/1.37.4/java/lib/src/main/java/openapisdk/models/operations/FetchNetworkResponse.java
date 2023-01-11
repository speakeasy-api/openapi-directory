package openapisdk.models.operations;



public class FetchNetworkResponse {
    public String contentType;
    public FetchNetworkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchNetworkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SupersimV1Network supersimV1Network;
    public FetchNetworkResponse withSupersimV1Network(openapisdk.models.shared.SupersimV1Network supersimV1Network) {
        this.supersimV1Network = supersimV1Network;
        return this;
    }
}