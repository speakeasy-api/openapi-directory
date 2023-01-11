package openapisdk.models.operations;



public class AdexperiencereportSitesGetResponse {
    public String contentType;
    public AdexperiencereportSitesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SiteSummaryResponse siteSummaryResponse;
    public AdexperiencereportSitesGetResponse withSiteSummaryResponse(openapisdk.models.shared.SiteSummaryResponse siteSummaryResponse) {
        this.siteSummaryResponse = siteSummaryResponse;
        return this;
    }
    public Long statusCode;
    public AdexperiencereportSitesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}