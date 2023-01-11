package openapisdk.models.operations;



public class UpdateSiteResponse {
    public String contentType;
    public UpdateSiteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Site site;
    public UpdateSiteResponse withSite(openapisdk.models.shared.Site site) {
        this.site = site;
        return this;
    }
    public Long statusCode;
    public UpdateSiteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}