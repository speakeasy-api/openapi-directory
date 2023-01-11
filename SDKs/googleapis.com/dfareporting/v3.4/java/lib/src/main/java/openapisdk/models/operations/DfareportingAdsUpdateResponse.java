package openapisdk.models.operations;



public class DfareportingAdsUpdateResponse {
    public openapisdk.models.shared.Ad ad;
    public DfareportingAdsUpdateResponse withAd(openapisdk.models.shared.Ad ad) {
        this.ad = ad;
        return this;
    }
    public String contentType;
    public DfareportingAdsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingAdsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}