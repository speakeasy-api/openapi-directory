package openapisdk.models.operations;



public class DcimSitesUpdateResponse {
    public String contentType;
    public DcimSitesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Site site;
    public DcimSitesUpdateResponse withSite(openapisdk.models.shared.Site site) {
        this.site = site;
        return this;
    }
    public Long statusCode;
    public DcimSitesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}