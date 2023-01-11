package openapisdk.models.operations;



public class YoutubeAnalyticsGroupItemsListResponse {
    public String contentType;
    public YoutubeAnalyticsGroupItemsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListGroupItemsResponse listGroupItemsResponse;
    public YoutubeAnalyticsGroupItemsListResponse withListGroupItemsResponse(openapisdk.models.shared.ListGroupItemsResponse listGroupItemsResponse) {
        this.listGroupItemsResponse = listGroupItemsResponse;
        return this;
    }
    public Long statusCode;
    public YoutubeAnalyticsGroupItemsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}