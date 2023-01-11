package openapisdk.models.operations;



public class ListCallNotificationResponse {
    public String contentType;
    public ListCallNotificationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListCallNotificationListCallNotificationResponse listCallNotificationResponse;
    public ListCallNotificationResponse withListCallNotificationResponse(ListCallNotificationListCallNotificationResponse listCallNotificationResponse) {
        this.listCallNotificationResponse = listCallNotificationResponse;
        return this;
    }
    public Long statusCode;
    public ListCallNotificationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}