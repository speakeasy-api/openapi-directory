package openapisdk.models.operations;



public class DfareportingSitesUpdateResponse {
    public String contentType;
    public DfareportingSitesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Site site;
    public DfareportingSitesUpdateResponse withSite(openapisdk.models.shared.Site site) {
        this.site = site;
        return this;
    }
    public Long statusCode;
    public DfareportingSitesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}