package openapisdk.models.operations;



public class CheckKeyUsabilityResponse {
    public openapisdk.models.shared.AddressLookupResponseSchema addressLookupResponseSchema;
    public CheckKeyUsabilityResponse withAddressLookupResponseSchema(openapisdk.models.shared.AddressLookupResponseSchema addressLookupResponseSchema) {
        this.addressLookupResponseSchema = addressLookupResponseSchema;
        return this;
    }
    public String contentType;
    public CheckKeyUsabilityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.KeyUsabilityResponseSchema keyUsabilityResponseSchema;
    public CheckKeyUsabilityResponse withKeyUsabilityResponseSchema(openapisdk.models.shared.KeyUsabilityResponseSchema keyUsabilityResponseSchema) {
        this.keyUsabilityResponseSchema = keyUsabilityResponseSchema;
        return this;
    }
    public Long statusCode;
    public CheckKeyUsabilityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}