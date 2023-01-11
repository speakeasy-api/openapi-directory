package openapisdk.models.operations;



public class CloudassetResourcesSearchAllResponse {
    public String contentType;
    public CloudassetResourcesSearchAllResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SearchAllResourcesResponse searchAllResourcesResponse;
    public CloudassetResourcesSearchAllResponse withSearchAllResourcesResponse(openapisdk.models.shared.SearchAllResourcesResponse searchAllResourcesResponse) {
        this.searchAllResourcesResponse = searchAllResourcesResponse;
        return this;
    }
    public Long statusCode;
    public CloudassetResourcesSearchAllResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}