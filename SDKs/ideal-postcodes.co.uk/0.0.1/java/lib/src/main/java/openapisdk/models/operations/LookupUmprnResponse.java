package openapisdk.models.operations;



public class LookupUmprnResponse {
    public openapisdk.models.shared.AddressLookupResponseSchema addressLookupResponseSchema;
    public LookupUmprnResponse withAddressLookupResponseSchema(openapisdk.models.shared.AddressLookupResponseSchema addressLookupResponseSchema) {
        this.addressLookupResponseSchema = addressLookupResponseSchema;
        return this;
    }
    public String contentType;
    public LookupUmprnResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseSchema errorResponseSchema;
    public LookupUmprnResponse withErrorResponseSchema(openapisdk.models.shared.ErrorResponseSchema errorResponseSchema) {
        this.errorResponseSchema = errorResponseSchema;
        return this;
    }
    public Long statusCode;
    public LookupUmprnResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}