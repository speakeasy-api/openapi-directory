package openapisdk.models.operations;



public class ListUsageTriggerResponse {
    public String contentType;
    public ListUsageTriggerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListUsageTriggerListUsageTriggerResponse listUsageTriggerResponse;
    public ListUsageTriggerResponse withListUsageTriggerResponse(ListUsageTriggerListUsageTriggerResponse listUsageTriggerResponse) {
        this.listUsageTriggerResponse = listUsageTriggerResponse;
        return this;
    }
    public Long statusCode;
    public ListUsageTriggerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}