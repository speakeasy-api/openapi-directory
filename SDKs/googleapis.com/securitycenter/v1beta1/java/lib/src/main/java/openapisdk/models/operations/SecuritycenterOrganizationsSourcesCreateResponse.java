package openapisdk.models.operations;



public class SecuritycenterOrganizationsSourcesCreateResponse {
    public String contentType;
    public SecuritycenterOrganizationsSourcesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Source source;
    public SecuritycenterOrganizationsSourcesCreateResponse withSource(openapisdk.models.shared.Source source) {
        this.source = source;
        return this;
    }
    public Long statusCode;
    public SecuritycenterOrganizationsSourcesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}