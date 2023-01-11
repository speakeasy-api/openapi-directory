package openapisdk.models.operations;



public class SiteVerificationWebResourceGetTokenResponse {
    public String contentType;
    public SiteVerificationWebResourceGetTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SiteVerificationWebResourceGettokenResponse siteVerificationWebResourceGettokenResponse;
    public SiteVerificationWebResourceGetTokenResponse withSiteVerificationWebResourceGettokenResponse(openapisdk.models.shared.SiteVerificationWebResourceGettokenResponse siteVerificationWebResourceGettokenResponse) {
        this.siteVerificationWebResourceGettokenResponse = siteVerificationWebResourceGettokenResponse;
        return this;
    }
    public Long statusCode;
    public SiteVerificationWebResourceGetTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}