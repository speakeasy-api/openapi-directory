package openapisdk.models.operations;



public class DfareportingAdvertiserLandingPagesUpdateResponse {
    public String contentType;
    public DfareportingAdvertiserLandingPagesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LandingPage landingPage;
    public DfareportingAdvertiserLandingPagesUpdateResponse withLandingPage(openapisdk.models.shared.LandingPage landingPage) {
        this.landingPage = landingPage;
        return this;
    }
    public Long statusCode;
    public DfareportingAdvertiserLandingPagesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}