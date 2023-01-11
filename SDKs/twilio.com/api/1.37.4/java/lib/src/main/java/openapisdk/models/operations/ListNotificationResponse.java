package openapisdk.models.operations;



public class ListNotificationResponse {
    public String contentType;
    public ListNotificationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListNotificationListNotificationResponse listNotificationResponse;
    public ListNotificationResponse withListNotificationResponse(ListNotificationListNotificationResponse listNotificationResponse) {
        this.listNotificationResponse = listNotificationResponse;
        return this;
    }
    public Long statusCode;
    public ListNotificationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}