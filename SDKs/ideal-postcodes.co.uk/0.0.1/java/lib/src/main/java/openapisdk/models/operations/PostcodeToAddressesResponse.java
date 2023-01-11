package openapisdk.models.operations;



public class PostcodeToAddressesResponse {
    public openapisdk.models.shared.AddressLookupResponseSchema addressLookupResponseSchema;
    public PostcodeToAddressesResponse withAddressLookupResponseSchema(openapisdk.models.shared.AddressLookupResponseSchema addressLookupResponseSchema) {
        this.addressLookupResponseSchema = addressLookupResponseSchema;
        return this;
    }
    public String contentType;
    public PostcodeToAddressesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseSchema errorResponseSchema;
    public PostcodeToAddressesResponse withErrorResponseSchema(openapisdk.models.shared.ErrorResponseSchema errorResponseSchema) {
        this.errorResponseSchema = errorResponseSchema;
        return this;
    }
    public openapisdk.models.shared.PostcodeToAddressResponseSchema postcodeToAddressResponseSchema;
    public PostcodeToAddressesResponse withPostcodeToAddressResponseSchema(openapisdk.models.shared.PostcodeToAddressResponseSchema postcodeToAddressResponseSchema) {
        this.postcodeToAddressResponseSchema = postcodeToAddressResponseSchema;
        return this;
    }
    public Long statusCode;
    public PostcodeToAddressesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}