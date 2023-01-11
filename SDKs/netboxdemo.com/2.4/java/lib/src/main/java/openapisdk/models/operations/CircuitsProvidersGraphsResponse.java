package openapisdk.models.operations;



public class CircuitsProvidersGraphsResponse {
    public String contentType;
    public CircuitsProvidersGraphsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Provider provider;
    public CircuitsProvidersGraphsResponse withProvider(openapisdk.models.shared.Provider provider) {
        this.provider = provider;
        return this;
    }
    public Long statusCode;
    public CircuitsProvidersGraphsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}