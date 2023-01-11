package openapisdk.models.operations;



public class ExportSitesJsonResponse {
    public String contentType;
    public ExportSitesJsonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Site[] sites;
    public ExportSitesJsonResponse withSites(openapisdk.models.shared.Site[] sites) {
        this.sites = sites;
        return this;
    }
    public Long statusCode;
    public ExportSitesJsonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}