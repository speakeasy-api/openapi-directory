package openapisdk.models.operations;



public class PingWebhookV1Response {
    public String contentType;
    public PingWebhookV1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PingResponse pingResponse;
    public PingWebhookV1Response withPingResponse(openapisdk.models.shared.PingResponse pingResponse) {
        this.pingResponse = pingResponse;
        return this;
    }
    public Long statusCode;
    public PingWebhookV1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object inlineResponse401;
    public PingWebhookV1Response withInlineResponse401(Object inlineResponse401) {
        this.inlineResponse401 = inlineResponse401;
        return this;
    }
    public Object inlineResponse403;
    public PingWebhookV1Response withInlineResponse403(Object inlineResponse403) {
        this.inlineResponse403 = inlineResponse403;
        return this;
    }
    public Object inlineResponse404;
    public PingWebhookV1Response withInlineResponse404(Object inlineResponse404) {
        this.inlineResponse404 = inlineResponse404;
        return this;
    }
}