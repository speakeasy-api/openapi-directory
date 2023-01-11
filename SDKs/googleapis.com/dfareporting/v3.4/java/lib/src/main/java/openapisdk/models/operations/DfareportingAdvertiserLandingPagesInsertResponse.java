package openapisdk.models.operations;



public class DfareportingAdvertiserLandingPagesInsertResponse {
    public String contentType;
    public DfareportingAdvertiserLandingPagesInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LandingPage landingPage;
    public DfareportingAdvertiserLandingPagesInsertResponse withLandingPage(openapisdk.models.shared.LandingPage landingPage) {
        this.landingPage = landingPage;
        return this;
    }
    public Long statusCode;
    public DfareportingAdvertiserLandingPagesInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}