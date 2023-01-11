package openapisdk.models.operations;



public class LookupUdprnResponse {
    public openapisdk.models.shared.AddressLookupResponseSchema addressLookupResponseSchema;
    public LookupUdprnResponse withAddressLookupResponseSchema(openapisdk.models.shared.AddressLookupResponseSchema addressLookupResponseSchema) {
        this.addressLookupResponseSchema = addressLookupResponseSchema;
        return this;
    }
    public String contentType;
    public LookupUdprnResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseSchema errorResponseSchema;
    public LookupUdprnResponse withErrorResponseSchema(openapisdk.models.shared.ErrorResponseSchema errorResponseSchema) {
        this.errorResponseSchema = errorResponseSchema;
        return this;
    }
    public Long statusCode;
    public LookupUdprnResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}