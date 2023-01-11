package openapisdk.models.operations;



public class VersionhistoryPlatformsChannelsListResponse {
    public String contentType;
    public VersionhistoryPlatformsChannelsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListChannelsResponse listChannelsResponse;
    public VersionhistoryPlatformsChannelsListResponse withListChannelsResponse(openapisdk.models.shared.ListChannelsResponse listChannelsResponse) {
        this.listChannelsResponse = listChannelsResponse;
        return this;
    }
    public Long statusCode;
    public VersionhistoryPlatformsChannelsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}