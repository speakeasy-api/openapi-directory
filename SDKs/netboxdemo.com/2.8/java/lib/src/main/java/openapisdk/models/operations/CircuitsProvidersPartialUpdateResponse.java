package openapisdk.models.operations;



public class CircuitsProvidersPartialUpdateResponse {
    public String contentType;
    public CircuitsProvidersPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Provider provider;
    public CircuitsProvidersPartialUpdateResponse withProvider(openapisdk.models.shared.Provider provider) {
        this.provider = provider;
        return this;
    }
    public Long statusCode;
    public CircuitsProvidersPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}