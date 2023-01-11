package openapisdk.models.operations;



public class DfareportingAdsInsertResponse {
    public openapisdk.models.shared.Ad ad;
    public DfareportingAdsInsertResponse withAd(openapisdk.models.shared.Ad ad) {
        this.ad = ad;
        return this;
    }
    public String contentType;
    public DfareportingAdsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingAdsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}