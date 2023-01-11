package openapisdk.models.operations;



public class AddressSearchResponse {
    public openapisdk.models.shared.AddressSearchResponseSchema addressSearchResponseSchema;
    public AddressSearchResponse withAddressSearchResponseSchema(openapisdk.models.shared.AddressSearchResponseSchema addressSearchResponseSchema) {
        this.addressSearchResponseSchema = addressSearchResponseSchema;
        return this;
    }
    public String contentType;
    public AddressSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseSchema errorResponseSchema;
    public AddressSearchResponse withErrorResponseSchema(openapisdk.models.shared.ErrorResponseSchema errorResponseSchema) {
        this.errorResponseSchema = errorResponseSchema;
        return this;
    }
    public Long statusCode;
    public AddressSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}