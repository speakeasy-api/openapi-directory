package openapisdk.models.operations;



public class RotateAccountOrganizationExportTokenResponse {
    public String contentType;
    public RotateAccountOrganizationExportTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Organization organization;
    public RotateAccountOrganizationExportTokenResponse withOrganization(openapisdk.models.shared.Organization organization) {
        this.organization = organization;
        return this;
    }
    public Long statusCode;
    public RotateAccountOrganizationExportTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}