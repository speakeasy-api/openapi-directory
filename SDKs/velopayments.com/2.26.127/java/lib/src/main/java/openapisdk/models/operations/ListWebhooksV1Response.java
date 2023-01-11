package openapisdk.models.operations;



public class ListWebhooksV1Response {
    public String contentType;
    public ListWebhooksV1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListWebhooksV1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WebhooksResponse webhooksResponse;
    public ListWebhooksV1Response withWebhooksResponse(openapisdk.models.shared.WebhooksResponse webhooksResponse) {
        this.webhooksResponse = webhooksResponse;
        return this;
    }
    public Object inlineResponse401;
    public ListWebhooksV1Response withInlineResponse401(Object inlineResponse401) {
        this.inlineResponse401 = inlineResponse401;
        return this;
    }
    public Object inlineResponse403;
    public ListWebhooksV1Response withInlineResponse403(Object inlineResponse403) {
        this.inlineResponse403 = inlineResponse403;
        return this;
    }
}