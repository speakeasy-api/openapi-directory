package openapisdk.models.operations;



public class CloudidentityGroupsMembershipsSearchTransitiveGroupsResponse {
    public String contentType;
    public CloudidentityGroupsMembershipsSearchTransitiveGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SearchTransitiveGroupsResponse searchTransitiveGroupsResponse;
    public CloudidentityGroupsMembershipsSearchTransitiveGroupsResponse withSearchTransitiveGroupsResponse(openapisdk.models.shared.SearchTransitiveGroupsResponse searchTransitiveGroupsResponse) {
        this.searchTransitiveGroupsResponse = searchTransitiveGroupsResponse;
        return this;
    }
    public Long statusCode;
    public CloudidentityGroupsMembershipsSearchTransitiveGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}