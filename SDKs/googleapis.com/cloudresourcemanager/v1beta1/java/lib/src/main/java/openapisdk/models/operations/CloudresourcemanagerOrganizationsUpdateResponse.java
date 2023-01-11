package openapisdk.models.operations;



public class CloudresourcemanagerOrganizationsUpdateResponse {
    public String contentType;
    public CloudresourcemanagerOrganizationsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Organization organization;
    public CloudresourcemanagerOrganizationsUpdateResponse withOrganization(openapisdk.models.shared.Organization organization) {
        this.organization = organization;
        return this;
    }
    public Long statusCode;
    public CloudresourcemanagerOrganizationsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}