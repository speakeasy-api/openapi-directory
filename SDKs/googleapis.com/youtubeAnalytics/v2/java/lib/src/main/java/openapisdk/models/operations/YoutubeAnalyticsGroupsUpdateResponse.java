package openapisdk.models.operations;



public class YoutubeAnalyticsGroupsUpdateResponse {
    public String contentType;
    public YoutubeAnalyticsGroupsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Group group;
    public YoutubeAnalyticsGroupsUpdateResponse withGroup(openapisdk.models.shared.Group group) {
        this.group = group;
        return this;
    }
    public Long statusCode;
    public YoutubeAnalyticsGroupsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}