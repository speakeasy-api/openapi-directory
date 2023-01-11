package openapisdk.models.operations;



public class YoutubeAnalyticsGroupsInsertResponse {
    public String contentType;
    public YoutubeAnalyticsGroupsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Group group;
    public YoutubeAnalyticsGroupsInsertResponse withGroup(openapisdk.models.shared.Group group) {
        this.group = group;
        return this;
    }
    public Long statusCode;
    public YoutubeAnalyticsGroupsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}