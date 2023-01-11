package openapisdk.models.operations;



public class UpdateLicenseeResponse {
    public String contentType;
    public UpdateLicenseeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LicenseeResponseSchema licenseeResponseSchema;
    public UpdateLicenseeResponse withLicenseeResponseSchema(openapisdk.models.shared.LicenseeResponseSchema licenseeResponseSchema) {
        this.licenseeResponseSchema = licenseeResponseSchema;
        return this;
    }
    public Long statusCode;
    public UpdateLicenseeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}