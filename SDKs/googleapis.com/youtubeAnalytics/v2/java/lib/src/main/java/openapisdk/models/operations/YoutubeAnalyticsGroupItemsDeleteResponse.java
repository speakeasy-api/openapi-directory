package openapisdk.models.operations;



public class YoutubeAnalyticsGroupItemsDeleteResponse {
    public String contentType;
    public YoutubeAnalyticsGroupItemsDeleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EmptyResponse emptyResponse;
    public YoutubeAnalyticsGroupItemsDeleteResponse withEmptyResponse(openapisdk.models.shared.EmptyResponse emptyResponse) {
        this.emptyResponse = emptyResponse;
        return this;
    }
    public Long statusCode;
    public YoutubeAnalyticsGroupItemsDeleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}