package openapisdk.models.operations;



public class SiteVerificationWebResourceUpdateResponse {
    public String contentType;
    public SiteVerificationWebResourceUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SiteVerificationWebResourceResource siteVerificationWebResourceResource;
    public SiteVerificationWebResourceUpdateResponse withSiteVerificationWebResourceResource(openapisdk.models.shared.SiteVerificationWebResourceResource siteVerificationWebResourceResource) {
        this.siteVerificationWebResourceResource = siteVerificationWebResourceResource;
        return this;
    }
    public Long statusCode;
    public SiteVerificationWebResourceUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}