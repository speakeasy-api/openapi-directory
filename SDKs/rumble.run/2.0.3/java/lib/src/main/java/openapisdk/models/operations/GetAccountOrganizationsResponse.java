package openapisdk.models.operations;



public class GetAccountOrganizationsResponse {
    public String contentType;
    public GetAccountOrganizationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Organization[] organizations;
    public GetAccountOrganizationsResponse withOrganizations(openapisdk.models.shared.Organization[] organizations) {
        this.organizations = organizations;
        return this;
    }
    public Long statusCode;
    public GetAccountOrganizationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}