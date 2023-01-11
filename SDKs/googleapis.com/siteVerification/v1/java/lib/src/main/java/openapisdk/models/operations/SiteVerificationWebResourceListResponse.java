package openapisdk.models.operations;



public class SiteVerificationWebResourceListResponse {
    public String contentType;
    public SiteVerificationWebResourceListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SiteVerificationWebResourceListResponse siteVerificationWebResourceListResponse;
    public SiteVerificationWebResourceListResponse withSiteVerificationWebResourceListResponse(openapisdk.models.shared.SiteVerificationWebResourceListResponse siteVerificationWebResourceListResponse) {
        this.siteVerificationWebResourceListResponse = siteVerificationWebResourceListResponse;
        return this;
    }
    public Long statusCode;
    public SiteVerificationWebResourceListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}