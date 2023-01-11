package openapisdk.models.operations;



public class FetchWebhookResponse {
    public String contentType;
    public FetchWebhookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchWebhookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VerifyV2ServiceWebhook verifyV2ServiceWebhook;
    public FetchWebhookResponse withVerifyV2ServiceWebhook(openapisdk.models.shared.VerifyV2ServiceWebhook verifyV2ServiceWebhook) {
        this.verifyV2ServiceWebhook = verifyV2ServiceWebhook;
        return this;
    }
}