package openapisdk.models.operations;



public class AddressAutocompleteResponse {
    public openapisdk.models.shared.AddressAutocompleteResponseSchema addressAutocompleteResponseSchema;
    public AddressAutocompleteResponse withAddressAutocompleteResponseSchema(openapisdk.models.shared.AddressAutocompleteResponseSchema addressAutocompleteResponseSchema) {
        this.addressAutocompleteResponseSchema = addressAutocompleteResponseSchema;
        return this;
    }
    public openapisdk.models.shared.AddressLookupResponseSchema addressLookupResponseSchema;
    public AddressAutocompleteResponse withAddressLookupResponseSchema(openapisdk.models.shared.AddressLookupResponseSchema addressLookupResponseSchema) {
        this.addressLookupResponseSchema = addressLookupResponseSchema;
        return this;
    }
    public String contentType;
    public AddressAutocompleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AddressAutocompleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}