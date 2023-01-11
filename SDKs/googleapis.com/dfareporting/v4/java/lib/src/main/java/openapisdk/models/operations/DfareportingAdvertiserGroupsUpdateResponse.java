package openapisdk.models.operations;



public class DfareportingAdvertiserGroupsUpdateResponse {
    public openapisdk.models.shared.AdvertiserGroup advertiserGroup;
    public DfareportingAdvertiserGroupsUpdateResponse withAdvertiserGroup(openapisdk.models.shared.AdvertiserGroup advertiserGroup) {
        this.advertiserGroup = advertiserGroup;
        return this;
    }
    public String contentType;
    public DfareportingAdvertiserGroupsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingAdvertiserGroupsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}