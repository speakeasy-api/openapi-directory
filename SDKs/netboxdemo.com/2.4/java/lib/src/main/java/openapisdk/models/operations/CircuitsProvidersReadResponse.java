package openapisdk.models.operations;



public class CircuitsProvidersReadResponse {
    public String contentType;
    public CircuitsProvidersReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Provider provider;
    public CircuitsProvidersReadResponse withProvider(openapisdk.models.shared.Provider provider) {
        this.provider = provider;
        return this;
    }
    public Long statusCode;
    public CircuitsProvidersReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}