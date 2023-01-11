package openapisdk.models.operations;



public class SasportalInstallerValidateResponse {
    public String contentType;
    public SasportalInstallerValidateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> sasPortalValidateInstallerResponse;
    public SasportalInstallerValidateResponse withSasPortalValidateInstallerResponse(java.util.Map<String, Object> sasPortalValidateInstallerResponse) {
        this.sasPortalValidateInstallerResponse = sasPortalValidateInstallerResponse;
        return this;
    }
    public Long statusCode;
    public SasportalInstallerValidateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}