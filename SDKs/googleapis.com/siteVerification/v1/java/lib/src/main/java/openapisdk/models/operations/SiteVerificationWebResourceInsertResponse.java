package openapisdk.models.operations;



public class SiteVerificationWebResourceInsertResponse {
    public String contentType;
    public SiteVerificationWebResourceInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SiteVerificationWebResourceResource siteVerificationWebResourceResource;
    public SiteVerificationWebResourceInsertResponse withSiteVerificationWebResourceResource(openapisdk.models.shared.SiteVerificationWebResourceResource siteVerificationWebResourceResource) {
        this.siteVerificationWebResourceResource = siteVerificationWebResourceResource;
        return this;
    }
    public Long statusCode;
    public SiteVerificationWebResourceInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}