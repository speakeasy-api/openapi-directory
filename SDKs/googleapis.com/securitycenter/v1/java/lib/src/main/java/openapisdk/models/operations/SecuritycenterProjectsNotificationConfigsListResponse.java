package openapisdk.models.operations;



public class SecuritycenterProjectsNotificationConfigsListResponse {
    public String contentType;
    public SecuritycenterProjectsNotificationConfigsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListNotificationConfigsResponse listNotificationConfigsResponse;
    public SecuritycenterProjectsNotificationConfigsListResponse withListNotificationConfigsResponse(openapisdk.models.shared.ListNotificationConfigsResponse listNotificationConfigsResponse) {
        this.listNotificationConfigsResponse = listNotificationConfigsResponse;
        return this;
    }
    public Long statusCode;
    public SecuritycenterProjectsNotificationConfigsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}