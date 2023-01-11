package openapisdk.models.operations;



public class VersionhistoryPlatformsChannelsVersionsListResponse {
    public String contentType;
    public VersionhistoryPlatformsChannelsVersionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListVersionsResponse listVersionsResponse;
    public VersionhistoryPlatformsChannelsVersionsListResponse withListVersionsResponse(openapisdk.models.shared.ListVersionsResponse listVersionsResponse) {
        this.listVersionsResponse = listVersionsResponse;
        return this;
    }
    public Long statusCode;
    public VersionhistoryPlatformsChannelsVersionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}