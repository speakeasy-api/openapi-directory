package openapisdk.models.operations;



public class DfareportingAdvertiserGroupsListResponse {
    public openapisdk.models.shared.AdvertiserGroupsListResponse advertiserGroupsListResponse;
    public DfareportingAdvertiserGroupsListResponse withAdvertiserGroupsListResponse(openapisdk.models.shared.AdvertiserGroupsListResponse advertiserGroupsListResponse) {
        this.advertiserGroupsListResponse = advertiserGroupsListResponse;
        return this;
    }
    public String contentType;
    public DfareportingAdvertiserGroupsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingAdvertiserGroupsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}