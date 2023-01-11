package openapisdk.models.operations;



public class CloudresourcemanagerOrganizationsGetResponse {
    public String contentType;
    public CloudresourcemanagerOrganizationsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Organization organization;
    public CloudresourcemanagerOrganizationsGetResponse withOrganization(openapisdk.models.shared.Organization organization) {
        this.organization = organization;
        return this;
    }
    public Long statusCode;
    public CloudresourcemanagerOrganizationsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}