package openapisdk.models.operations;



public class CreateLicenseeResponse {
    public openapisdk.models.shared.AddressLookupResponseSchema addressLookupResponseSchema;
    public CreateLicenseeResponse withAddressLookupResponseSchema(openapisdk.models.shared.AddressLookupResponseSchema addressLookupResponseSchema) {
        this.addressLookupResponseSchema = addressLookupResponseSchema;
        return this;
    }
    public String contentType;
    public CreateLicenseeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LicenseeResponseSchema licenseeResponseSchema;
    public CreateLicenseeResponse withLicenseeResponseSchema(openapisdk.models.shared.LicenseeResponseSchema licenseeResponseSchema) {
        this.licenseeResponseSchema = licenseeResponseSchema;
        return this;
    }
    public Long statusCode;
    public CreateLicenseeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}