package openapisdk.models.operations;



public class LicensesGetResponse {
    public String contentType;
    public LicensesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public LicensesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public LicensesGetResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.License license;
    public LicensesGetResponse withLicense(openapisdk.models.shared.License license) {
        this.license = license;
        return this;
    }
}