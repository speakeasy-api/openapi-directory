package openapisdk.models.operations;



public class RunProjectsLocationsAuthorizeddomainsListResponse {
    public String contentType;
    public RunProjectsLocationsAuthorizeddomainsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListAuthorizedDomainsResponse listAuthorizedDomainsResponse;
    public RunProjectsLocationsAuthorizeddomainsListResponse withListAuthorizedDomainsResponse(openapisdk.models.shared.ListAuthorizedDomainsResponse listAuthorizedDomainsResponse) {
        this.listAuthorizedDomainsResponse = listAuthorizedDomainsResponse;
        return this;
    }
    public Long statusCode;
    public RunProjectsLocationsAuthorizeddomainsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}