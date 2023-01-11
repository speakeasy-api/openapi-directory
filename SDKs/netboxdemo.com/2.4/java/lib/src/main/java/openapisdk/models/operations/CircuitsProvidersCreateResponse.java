package openapisdk.models.operations;



public class CircuitsProvidersCreateResponse {
    public String contentType;
    public CircuitsProvidersCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Provider provider;
    public CircuitsProvidersCreateResponse withProvider(openapisdk.models.shared.Provider provider) {
        this.provider = provider;
        return this;
    }
    public Long statusCode;
    public CircuitsProvidersCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}