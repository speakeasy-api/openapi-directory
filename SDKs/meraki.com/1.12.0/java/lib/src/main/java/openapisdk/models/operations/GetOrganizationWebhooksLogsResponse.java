package openapisdk.models.operations;



public class GetOrganizationWebhooksLogsResponse {
    public String contentType;
    public GetOrganizationWebhooksLogsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetOrganizationWebhooksLogsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetOrganizationWebhooksLogsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getOrganizationWebhooksLogs200ApplicationJSONObject;
    public GetOrganizationWebhooksLogsResponse withGetOrganizationWebhooksLogs200ApplicationJsonObject(java.util.Map<String, Object> getOrganizationWebhooksLogs200ApplicationJSONObject) {
        this.getOrganizationWebhooksLogs200ApplicationJSONObject = getOrganizationWebhooksLogs200ApplicationJSONObject;
        return this;
    }
}