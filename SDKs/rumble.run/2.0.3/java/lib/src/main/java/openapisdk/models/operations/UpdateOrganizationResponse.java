package openapisdk.models.operations;



public class UpdateOrganizationResponse {
    public String contentType;
    public UpdateOrganizationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Organization organization;
    public UpdateOrganizationResponse withOrganization(openapisdk.models.shared.Organization organization) {
        this.organization = organization;
        return this;
    }
    public Long statusCode;
    public UpdateOrganizationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}