package openapisdk.models.operations;



public class VersionhistoryPlatformsListResponse {
    public String contentType;
    public VersionhistoryPlatformsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListPlatformsResponse listPlatformsResponse;
    public VersionhistoryPlatformsListResponse withListPlatformsResponse(openapisdk.models.shared.ListPlatformsResponse listPlatformsResponse) {
        this.listPlatformsResponse = listPlatformsResponse;
        return this;
    }
    public Long statusCode;
    public VersionhistoryPlatformsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}