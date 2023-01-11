package openapisdk.models.operations;



public class FetchNetworkAccessProfileNetworkResponse {
    public String contentType;
    public FetchNetworkAccessProfileNetworkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchNetworkAccessProfileNetworkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork supersimV1NetworkAccessProfileNetworkAccessProfileNetwork;
    public FetchNetworkAccessProfileNetworkResponse withSupersimV1NetworkAccessProfileNetworkAccessProfileNetwork(openapisdk.models.shared.SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork supersimV1NetworkAccessProfileNetworkAccessProfileNetwork) {
        this.supersimV1NetworkAccessProfileNetworkAccessProfileNetwork = supersimV1NetworkAccessProfileNetworkAccessProfileNetwork;
        return this;
    }
}