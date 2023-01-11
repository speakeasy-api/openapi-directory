package openapisdk.models.operations;



public class CircuitsProvidersUpdateResponse {
    public String contentType;
    public CircuitsProvidersUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Provider provider;
    public CircuitsProvidersUpdateResponse withProvider(openapisdk.models.shared.Provider provider) {
        this.provider = provider;
        return this;
    }
    public Long statusCode;
    public CircuitsProvidersUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}