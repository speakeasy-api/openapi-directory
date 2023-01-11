package openapisdk.models.operations;



public class AbusiveexperiencereportSitesGetResponse {
    public String contentType;
    public AbusiveexperiencereportSitesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SiteSummaryResponse siteSummaryResponse;
    public AbusiveexperiencereportSitesGetResponse withSiteSummaryResponse(openapisdk.models.shared.SiteSummaryResponse siteSummaryResponse) {
        this.siteSummaryResponse = siteSummaryResponse;
        return this;
    }
    public Long statusCode;
    public AbusiveexperiencereportSitesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}