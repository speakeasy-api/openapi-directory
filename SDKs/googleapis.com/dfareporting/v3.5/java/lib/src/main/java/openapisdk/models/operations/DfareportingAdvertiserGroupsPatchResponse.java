package openapisdk.models.operations;



public class DfareportingAdvertiserGroupsPatchResponse {
    public openapisdk.models.shared.AdvertiserGroup advertiserGroup;
    public DfareportingAdvertiserGroupsPatchResponse withAdvertiserGroup(openapisdk.models.shared.AdvertiserGroup advertiserGroup) {
        this.advertiserGroup = advertiserGroup;
        return this;
    }
    public String contentType;
    public DfareportingAdvertiserGroupsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingAdvertiserGroupsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}