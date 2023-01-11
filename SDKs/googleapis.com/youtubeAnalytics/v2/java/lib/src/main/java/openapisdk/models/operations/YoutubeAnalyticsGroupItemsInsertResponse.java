package openapisdk.models.operations;



public class YoutubeAnalyticsGroupItemsInsertResponse {
    public String contentType;
    public YoutubeAnalyticsGroupItemsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GroupItem groupItem;
    public YoutubeAnalyticsGroupItemsInsertResponse withGroupItem(openapisdk.models.shared.GroupItem groupItem) {
        this.groupItem = groupItem;
        return this;
    }
    public Long statusCode;
    public YoutubeAnalyticsGroupItemsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}