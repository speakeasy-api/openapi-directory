package openapisdk.models.operations;



public class CreateNetworkAccessProfileNetworkResponse {
    public String contentType;
    public CreateNetworkAccessProfileNetworkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateNetworkAccessProfileNetworkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork supersimV1NetworkAccessProfileNetworkAccessProfileNetwork;
    public CreateNetworkAccessProfileNetworkResponse withSupersimV1NetworkAccessProfileNetworkAccessProfileNetwork(openapisdk.models.shared.SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork supersimV1NetworkAccessProfileNetworkAccessProfileNetwork) {
        this.supersimV1NetworkAccessProfileNetworkAccessProfileNetwork = supersimV1NetworkAccessProfileNetworkAccessProfileNetwork;
        return this;
    }
}