package openapisdk.models.operations;



public class SecuritycenterOrganizationsSourcesGetResponse {
    public String contentType;
    public SecuritycenterOrganizationsSourcesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Source source;
    public SecuritycenterOrganizationsSourcesGetResponse withSource(openapisdk.models.shared.Source source) {
        this.source = source;
        return this;
    }
    public Long statusCode;
    public SecuritycenterOrganizationsSourcesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}