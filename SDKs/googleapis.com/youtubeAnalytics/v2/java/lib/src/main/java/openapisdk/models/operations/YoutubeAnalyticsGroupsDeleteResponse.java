package openapisdk.models.operations;



public class YoutubeAnalyticsGroupsDeleteResponse {
    public String contentType;
    public YoutubeAnalyticsGroupsDeleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EmptyResponse emptyResponse;
    public YoutubeAnalyticsGroupsDeleteResponse withEmptyResponse(openapisdk.models.shared.EmptyResponse emptyResponse) {
        this.emptyResponse = emptyResponse;
        return this;
    }
    public Long statusCode;
    public YoutubeAnalyticsGroupsDeleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}