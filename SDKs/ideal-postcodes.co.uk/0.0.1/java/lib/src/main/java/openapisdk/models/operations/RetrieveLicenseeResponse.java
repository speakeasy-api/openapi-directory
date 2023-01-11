package openapisdk.models.operations;



public class RetrieveLicenseeResponse {
    public openapisdk.models.shared.AddressLookupResponseSchema addressLookupResponseSchema;
    public RetrieveLicenseeResponse withAddressLookupResponseSchema(openapisdk.models.shared.AddressLookupResponseSchema addressLookupResponseSchema) {
        this.addressLookupResponseSchema = addressLookupResponseSchema;
        return this;
    }
    public String contentType;
    public RetrieveLicenseeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LicenseeResponseSchema licenseeResponseSchema;
    public RetrieveLicenseeResponse withLicenseeResponseSchema(openapisdk.models.shared.LicenseeResponseSchema licenseeResponseSchema) {
        this.licenseeResponseSchema = licenseeResponseSchema;
        return this;
    }
    public Long statusCode;
    public RetrieveLicenseeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}