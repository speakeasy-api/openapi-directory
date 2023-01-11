package openapisdk.models.operations;



public class DfareportingAdsPatchResponse {
    public openapisdk.models.shared.Ad ad;
    public DfareportingAdsPatchResponse withAd(openapisdk.models.shared.Ad ad) {
        this.ad = ad;
        return this;
    }
    public String contentType;
    public DfareportingAdsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingAdsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}