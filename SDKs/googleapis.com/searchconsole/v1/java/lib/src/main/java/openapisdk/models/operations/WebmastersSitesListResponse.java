package openapisdk.models.operations;



public class WebmastersSitesListResponse {
    public String contentType;
    public WebmastersSitesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SitesListResponse sitesListResponse;
    public WebmastersSitesListResponse withSitesListResponse(openapisdk.models.shared.SitesListResponse sitesListResponse) {
        this.sitesListResponse = sitesListResponse;
        return this;
    }
    public Long statusCode;
    public WebmastersSitesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}