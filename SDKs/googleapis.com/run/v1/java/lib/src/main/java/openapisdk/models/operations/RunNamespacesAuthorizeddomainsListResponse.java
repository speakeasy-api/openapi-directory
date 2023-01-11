package openapisdk.models.operations;



public class RunNamespacesAuthorizeddomainsListResponse {
    public String contentType;
    public RunNamespacesAuthorizeddomainsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListAuthorizedDomainsResponse listAuthorizedDomainsResponse;
    public RunNamespacesAuthorizeddomainsListResponse withListAuthorizedDomainsResponse(openapisdk.models.shared.ListAuthorizedDomainsResponse listAuthorizedDomainsResponse) {
        this.listAuthorizedDomainsResponse = listAuthorizedDomainsResponse;
        return this;
    }
    public Long statusCode;
    public RunNamespacesAuthorizeddomainsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}