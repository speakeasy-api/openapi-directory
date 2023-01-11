package openapisdk.models.operations;



public class SiteVerificationWebResourcePatchResponse {
    public String contentType;
    public SiteVerificationWebResourcePatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SiteVerificationWebResourceResource siteVerificationWebResourceResource;
    public SiteVerificationWebResourcePatchResponse withSiteVerificationWebResourceResource(openapisdk.models.shared.SiteVerificationWebResourceResource siteVerificationWebResourceResource) {
        this.siteVerificationWebResourceResource = siteVerificationWebResourceResource;
        return this;
    }
    public Long statusCode;
    public SiteVerificationWebResourcePatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}