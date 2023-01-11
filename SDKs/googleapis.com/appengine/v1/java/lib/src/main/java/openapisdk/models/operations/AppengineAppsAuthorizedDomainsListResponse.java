package openapisdk.models.operations;



public class AppengineAppsAuthorizedDomainsListResponse {
    public String contentType;
    public AppengineAppsAuthorizedDomainsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListAuthorizedDomainsResponse listAuthorizedDomainsResponse;
    public AppengineAppsAuthorizedDomainsListResponse withListAuthorizedDomainsResponse(openapisdk.models.shared.ListAuthorizedDomainsResponse listAuthorizedDomainsResponse) {
        this.listAuthorizedDomainsResponse = listAuthorizedDomainsResponse;
        return this;
    }
    public Long statusCode;
    public AppengineAppsAuthorizedDomainsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}