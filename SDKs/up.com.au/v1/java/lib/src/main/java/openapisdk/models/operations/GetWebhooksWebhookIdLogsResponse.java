package openapisdk.models.operations;



public class GetWebhooksWebhookIdLogsResponse {
    public String contentType;
    public GetWebhooksWebhookIdLogsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListWebhookDeliveryLogsResponse listWebhookDeliveryLogsResponse;
    public GetWebhooksWebhookIdLogsResponse withListWebhookDeliveryLogsResponse(openapisdk.models.shared.ListWebhookDeliveryLogsResponse listWebhookDeliveryLogsResponse) {
        this.listWebhookDeliveryLogsResponse = listWebhookDeliveryLogsResponse;
        return this;
    }
    public Long statusCode;
    public GetWebhooksWebhookIdLogsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}