package openapisdk.models.operations;



public class CreateWebhookResponse {
    public String contentType;
    public CreateWebhookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateWebhookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VerifyV2ServiceWebhook verifyV2ServiceWebhook;
    public CreateWebhookResponse withVerifyV2ServiceWebhook(openapisdk.models.shared.VerifyV2ServiceWebhook verifyV2ServiceWebhook) {
        this.verifyV2ServiceWebhook = verifyV2ServiceWebhook;
        return this;
    }
}