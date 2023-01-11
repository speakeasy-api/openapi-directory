package openapisdk.models.operations;



public class DfareportingAdvertiserLandingPagesListResponse {
    public openapisdk.models.shared.AdvertiserLandingPagesListResponse advertiserLandingPagesListResponse;
    public DfareportingAdvertiserLandingPagesListResponse withAdvertiserLandingPagesListResponse(openapisdk.models.shared.AdvertiserLandingPagesListResponse advertiserLandingPagesListResponse) {
        this.advertiserLandingPagesListResponse = advertiserLandingPagesListResponse;
        return this;
    }
    public String contentType;
    public DfareportingAdvertiserLandingPagesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingAdvertiserLandingPagesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}