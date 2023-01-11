package openapisdk.models.operations;



public class DeleteLicenseeResponse {
    public openapisdk.models.shared.AddressLookupResponseSchema addressLookupResponseSchema;
    public DeleteLicenseeResponse withAddressLookupResponseSchema(openapisdk.models.shared.AddressLookupResponseSchema addressLookupResponseSchema) {
        this.addressLookupResponseSchema = addressLookupResponseSchema;
        return this;
    }
    public String contentType;
    public DeleteLicenseeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteLicenseeResponseSchema deleteLicenseeResponseSchema;
    public DeleteLicenseeResponse withDeleteLicenseeResponseSchema(openapisdk.models.shared.DeleteLicenseeResponseSchema deleteLicenseeResponseSchema) {
        this.deleteLicenseeResponseSchema = deleteLicenseeResponseSchema;
        return this;
    }
    public Long statusCode;
    public DeleteLicenseeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}