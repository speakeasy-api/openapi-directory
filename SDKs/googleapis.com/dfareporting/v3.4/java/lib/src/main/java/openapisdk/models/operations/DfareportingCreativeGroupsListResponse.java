package openapisdk.models.operations;



public class DfareportingCreativeGroupsListResponse {
    public String contentType;
    public DfareportingCreativeGroupsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreativeGroupsListResponse creativeGroupsListResponse;
    public DfareportingCreativeGroupsListResponse withCreativeGroupsListResponse(openapisdk.models.shared.CreativeGroupsListResponse creativeGroupsListResponse) {
        this.creativeGroupsListResponse = creativeGroupsListResponse;
        return this;
    }
    public Long statusCode;
    public DfareportingCreativeGroupsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}