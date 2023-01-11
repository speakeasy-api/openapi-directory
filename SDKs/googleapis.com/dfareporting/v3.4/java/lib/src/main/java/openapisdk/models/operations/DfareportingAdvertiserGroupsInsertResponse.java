package openapisdk.models.operations;



public class DfareportingAdvertiserGroupsInsertResponse {
    public openapisdk.models.shared.AdvertiserGroup advertiserGroup;
    public DfareportingAdvertiserGroupsInsertResponse withAdvertiserGroup(openapisdk.models.shared.AdvertiserGroup advertiserGroup) {
        this.advertiserGroup = advertiserGroup;
        return this;
    }
    public String contentType;
    public DfareportingAdvertiserGroupsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingAdvertiserGroupsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}