package openapisdk.models.operations;



public class ListLicenseesResponse {
    public openapisdk.models.shared.AddressLookupResponseSchema addressLookupResponseSchema;
    public ListLicenseesResponse withAddressLookupResponseSchema(openapisdk.models.shared.AddressLookupResponseSchema addressLookupResponseSchema) {
        this.addressLookupResponseSchema = addressLookupResponseSchema;
        return this;
    }
    public String contentType;
    public ListLicenseesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LicenseeListResponseSchema licenseeListResponseSchema;
    public ListLicenseesResponse withLicenseeListResponseSchema(openapisdk.models.shared.LicenseeListResponseSchema licenseeListResponseSchema) {
        this.licenseeListResponseSchema = licenseeListResponseSchema;
        return this;
    }
    public Long statusCode;
    public ListLicenseesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}