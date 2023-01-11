package openapisdk.models.operations;



public class SiteVerificationWebResourceGetResponse {
    public String contentType;
    public SiteVerificationWebResourceGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SiteVerificationWebResourceResource siteVerificationWebResourceResource;
    public SiteVerificationWebResourceGetResponse withSiteVerificationWebResourceResource(openapisdk.models.shared.SiteVerificationWebResourceResource siteVerificationWebResourceResource) {
        this.siteVerificationWebResourceResource = siteVerificationWebResourceResource;
        return this;
    }
    public Long statusCode;
    public SiteVerificationWebResourceGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}