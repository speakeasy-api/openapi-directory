package openapisdk.models.operations;



public class DfareportingAdvertiserGroupsGetResponse {
    public openapisdk.models.shared.AdvertiserGroup advertiserGroup;
    public DfareportingAdvertiserGroupsGetResponse withAdvertiserGroup(openapisdk.models.shared.AdvertiserGroup advertiserGroup) {
        this.advertiserGroup = advertiserGroup;
        return this;
    }
    public String contentType;
    public DfareportingAdvertiserGroupsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingAdvertiserGroupsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}