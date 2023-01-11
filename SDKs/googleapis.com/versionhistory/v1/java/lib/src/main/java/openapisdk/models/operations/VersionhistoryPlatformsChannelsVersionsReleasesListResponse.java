package openapisdk.models.operations;



public class VersionhistoryPlatformsChannelsVersionsReleasesListResponse {
    public String contentType;
    public VersionhistoryPlatformsChannelsVersionsReleasesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListReleasesResponse listReleasesResponse;
    public VersionhistoryPlatformsChannelsVersionsReleasesListResponse withListReleasesResponse(openapisdk.models.shared.ListReleasesResponse listReleasesResponse) {
        this.listReleasesResponse = listReleasesResponse;
        return this;
    }
    public Long statusCode;
    public VersionhistoryPlatformsChannelsVersionsReleasesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}