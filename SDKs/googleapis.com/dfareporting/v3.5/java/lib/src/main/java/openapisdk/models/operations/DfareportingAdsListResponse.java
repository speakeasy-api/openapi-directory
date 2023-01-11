package openapisdk.models.operations;



public class DfareportingAdsListResponse {
    public openapisdk.models.shared.AdsListResponse adsListResponse;
    public DfareportingAdsListResponse withAdsListResponse(openapisdk.models.shared.AdsListResponse adsListResponse) {
        this.adsListResponse = adsListResponse;
        return this;
    }
    public String contentType;
    public DfareportingAdsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingAdsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}