package openapisdk.models.operations;



public class DfareportingAdvertisersPatchResponse {
    public openapisdk.models.shared.Advertiser advertiser;
    public DfareportingAdvertisersPatchResponse withAdvertiser(openapisdk.models.shared.Advertiser advertiser) {
        this.advertiser = advertiser;
        return this;
    }
    public String contentType;
    public DfareportingAdvertisersPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingAdvertisersPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}