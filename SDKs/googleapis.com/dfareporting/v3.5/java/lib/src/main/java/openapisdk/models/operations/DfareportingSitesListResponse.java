package openapisdk.models.operations;



public class DfareportingSitesListResponse {
    public String contentType;
    public DfareportingSitesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SitesListResponse sitesListResponse;
    public DfareportingSitesListResponse withSitesListResponse(openapisdk.models.shared.SitesListResponse sitesListResponse) {
        this.sitesListResponse = sitesListResponse;
        return this;
    }
    public Long statusCode;
    public DfareportingSitesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}