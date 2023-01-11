package openapisdk.models.operations;



public class DfareportingAdvertiserLandingPagesGetResponse {
    public String contentType;
    public DfareportingAdvertiserLandingPagesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LandingPage landingPage;
    public DfareportingAdvertiserLandingPagesGetResponse withLandingPage(openapisdk.models.shared.LandingPage landingPage) {
        this.landingPage = landingPage;
        return this;
    }
    public Long statusCode;
    public DfareportingAdvertiserLandingPagesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}