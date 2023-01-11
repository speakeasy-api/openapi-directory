package openapisdk.models.operations;



public class YoutubeAnalyticsGroupsListResponse {
    public String contentType;
    public YoutubeAnalyticsGroupsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListGroupsResponse listGroupsResponse;
    public YoutubeAnalyticsGroupsListResponse withListGroupsResponse(openapisdk.models.shared.ListGroupsResponse listGroupsResponse) {
        this.listGroupsResponse = listGroupsResponse;
        return this;
    }
    public Long statusCode;
    public YoutubeAnalyticsGroupsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}