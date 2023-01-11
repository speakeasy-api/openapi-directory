package openapisdk.models.operations;



public class UpdateWebhookResponse {
    public String contentType;
    public UpdateWebhookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateWebhookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VerifyV2ServiceWebhook verifyV2ServiceWebhook;
    public UpdateWebhookResponse withVerifyV2ServiceWebhook(openapisdk.models.shared.VerifyV2ServiceWebhook verifyV2ServiceWebhook) {
        this.verifyV2ServiceWebhook = verifyV2ServiceWebhook;
        return this;
    }
}