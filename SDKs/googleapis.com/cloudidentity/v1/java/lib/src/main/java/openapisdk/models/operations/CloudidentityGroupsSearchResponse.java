package openapisdk.models.operations;



public class CloudidentityGroupsSearchResponse {
    public String contentType;
    public CloudidentityGroupsSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SearchGroupsResponse searchGroupsResponse;
    public CloudidentityGroupsSearchResponse withSearchGroupsResponse(openapisdk.models.shared.SearchGroupsResponse searchGroupsResponse) {
        this.searchGroupsResponse = searchGroupsResponse;
        return this;
    }
    public Long statusCode;
    public CloudidentityGroupsSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}