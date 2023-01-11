package openapisdk.models.operations;



public class GetWebhookV1Response {
    public String contentType;
    public GetWebhookV1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetWebhookV1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WebhookResponse webhookResponse;
    public GetWebhookV1Response withWebhookResponse(openapisdk.models.shared.WebhookResponse webhookResponse) {
        this.webhookResponse = webhookResponse;
        return this;
    }
    public Object inlineResponse401;
    public GetWebhookV1Response withInlineResponse401(Object inlineResponse401) {
        this.inlineResponse401 = inlineResponse401;
        return this;
    }
    public Object inlineResponse403;
    public GetWebhookV1Response withInlineResponse403(Object inlineResponse403) {
        this.inlineResponse403 = inlineResponse403;
        return this;
    }
    public Object inlineResponse404;
    public GetWebhookV1Response withInlineResponse404(Object inlineResponse404) {
        this.inlineResponse404 = inlineResponse404;
        return this;
    }
}