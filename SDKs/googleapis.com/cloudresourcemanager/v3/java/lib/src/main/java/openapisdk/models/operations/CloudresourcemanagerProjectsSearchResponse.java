package openapisdk.models.operations;



public class CloudresourcemanagerProjectsSearchResponse {
    public String contentType;
    public CloudresourcemanagerProjectsSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SearchProjectsResponse searchProjectsResponse;
    public CloudresourcemanagerProjectsSearchResponse withSearchProjectsResponse(openapisdk.models.shared.SearchProjectsResponse searchProjectsResponse) {
        this.searchProjectsResponse = searchProjectsResponse;
        return this;
    }
    public Long statusCode;
    public CloudresourcemanagerProjectsSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}