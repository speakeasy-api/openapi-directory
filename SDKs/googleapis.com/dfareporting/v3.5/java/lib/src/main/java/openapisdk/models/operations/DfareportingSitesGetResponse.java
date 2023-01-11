package openapisdk.models.operations;



public class DfareportingSitesGetResponse {
    public String contentType;
    public DfareportingSitesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Site site;
    public DfareportingSitesGetResponse withSite(openapisdk.models.shared.Site site) {
        this.site = site;
        return this;
    }
    public Long statusCode;
    public DfareportingSitesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}