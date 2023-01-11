package openapisdk.models.operations;



public class DfareportingAdsGetResponse {
    public openapisdk.models.shared.Ad ad;
    public DfareportingAdsGetResponse withAd(openapisdk.models.shared.Ad ad) {
        this.ad = ad;
        return this;
    }
    public String contentType;
    public DfareportingAdsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingAdsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}