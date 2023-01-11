package openapisdk.models.operations;



public class CreateAccountOrganizationResponse {
    public String contentType;
    public CreateAccountOrganizationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Organization organization;
    public CreateAccountOrganizationResponse withOrganization(openapisdk.models.shared.Organization organization) {
        this.organization = organization;
        return this;
    }
    public Long statusCode;
    public CreateAccountOrganizationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}