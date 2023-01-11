package openapisdk.models.operations;



public class DfareportingAdvertiserLandingPagesPatchResponse {
    public String contentType;
    public DfareportingAdvertiserLandingPagesPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LandingPage landingPage;
    public DfareportingAdvertiserLandingPagesPatchResponse withLandingPage(openapisdk.models.shared.LandingPage landingPage) {
        this.landingPage = landingPage;
        return this;
    }
    public Long statusCode;
    public DfareportingAdvertiserLandingPagesPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}